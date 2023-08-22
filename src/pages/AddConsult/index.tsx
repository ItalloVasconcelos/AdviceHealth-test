import { Button, Form, FormControl, FormSelect } from "react-bootstrap"
import { NavBar } from "../../components/Navbar"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SCard } from "../../components/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const schema = yup.object().shape({
    date: yup.date().required("Digite o nome do Paciente"),
    start: yup.string().required("Digite o email do Paciente"),
    insurance: yup.string().required("Digite o plano do Paciente"),
    contact: yup.number().required("Digite o contato do Paciente"),
});



export const AddConsult = () => {
    let navigate = useNavigate()

    const api = axios.create({
        baseURL: "http://localhost:3000",
    });
    const [user, setUser] = useState<any>([]);
    useEffect(() => {
        api
            .get("/consult")
            .then((res) => setUser(res.data))
            .catch((err) => alert("Ocorreu um erro" + err));
    }, []);
    const addConsultAPI = (data: any) =>
        api
            .post("consult", data)
            .then(() => {
                console.log("Deu bom");
                navigate("/patient");
            })
            .catch(() => {
                console.log("Deu Ruim!");
                navigate("/consult");
            });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <div className="editConsult">
            <NavBar />
            <div className="editConsult__container">
                <div className="editConsult__title">
                    <h1>Consultas</h1>
                </div>
                <div className="editConsult__content">
                    <SCard title={"Formulário de consultas"} children={
                        <Form className="addConsult__form" onSubmit={handleSubmit(addConsultAPI)}>

                            <div className="editConsult__form--side">
                                <Form.Group className="editConsult__form--group">
                                    <Form.Label>Data</Form.Label>
                                    <FormControl

                                        type="date"
                                        placeholder="Adicione a do paciente"
                                        {...register("date")}
                                        name="date" />
                                </Form.Group>
                                <Form.Group className="editConsult__form--group">
                                    <Form.Label>Início</Form.Label>
                                    <FormControl
                                        type="time"
                                        placeholder="Adicione a hora da consulta"
                                        {...register("start")}
                                        name="start" />
                                </Form.Group>
                            </div>
                            <Form.Group className="editConsult__form--group">
                                <Form.Label>Clínica</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder="Adicione o nome do paciente"
                                    {...register("insurance")}
                                    name="insurance" />
                            </Form.Group>
                            <Form.Group className="editConsult__form--group">
                                <Form.Label>Paciente</Form.Label>
                                <FormSelect>
                                    {user.map((user: any) => (
                                        <option>{user.name}</option>
                                    ))}
                                </FormSelect>
                                <Form.Group className="editConsult__form--group">
                                    <Form.Label>Paciente</Form.Label>
                                    <FormSelect>
                                        <option>Ativo</option>
                                        <option>Inativo</option>
                                    </FormSelect>
                                </Form.Group>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Salvar
                            </Button>
                        </Form>
                    }
                    />

                </div>
            </div>
        </div>
    )

}