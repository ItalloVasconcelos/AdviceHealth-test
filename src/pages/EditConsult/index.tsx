import axios from "axios";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { SCard } from "../../components/Card";
import "./EditConsult.scss"
import { NavBar } from "../../components/Navbar";
const schema = yup.object().shape({
    name: yup.string().required("Digite o nome do Paciente"),
    email: yup.string().required("Digite o nome do Paciente"),
    insurance: yup.string().required("Digite o nome do Paciente"),
    contact: yup.number().required("Digite o nome do Paciente"),
});

export const EditConsult = () => {
    let navigate = useNavigate();
    const api = axios.create({
        baseURL: "http://localhost:3000",
    });

    const { id } = useParams();
    const editConsult = (data: any) =>
        api
            .patch(`/consult/${id}`, data)
            .then(() => {
                console.log("Deu bom");
                navigate("consult");
            })
            .catch(() => {
                console.log("Deu Ruim!");
            });
    useEffect(() => {
        api
            .get(`/consult/${id}`)
            .then((res) => {
                reset(res.data);
            })
            .catch((err) => alert("Ocorreu um erro" + err));
    }, []);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
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
                        <Form
                            className="editConsult__form"
                            onSubmit={handleSubmit(editConsult)}
                        >

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
                                <FormControl
                                    type="text"
                                    placeholder="Adicione o nome do paciente"
                                    {...register("patient")}
                                    name="patient" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Salvar
                            </Button>
                        </Form>} />

                </div>
            </div>
        </div>
    );
};
