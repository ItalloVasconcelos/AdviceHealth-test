import { NavBar } from "../../components/Navbar";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import "./AddPatient.scss"
import { SCard } from "../../components/Card";
import { Sidebar } from "../../components/Sidebar";
const schema = yup.object().shape({
    name: yup.string().required("Digite o nome do Paciente"),
    email: yup.string().required("Digite o email do Paciente"),
    insurance: yup.string().required("Digite o plano do Paciente"),
    contact: yup.number().required("Digite o contato do Paciente"),
});

export const AddPatient = () => {
    let navigate = useNavigate();
    const addPatientAPI = (data: any) =>
        axios
            .post("http://localhost:3000/patient", data)
            .then(() => {
                console.log("Deu bom");
                navigate("/patient");
            })
            .catch(() => {
                console.log("Deu Ruim!");
                navigate("/consult");
            });
    function onError(error: any) { }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <div className="addPatient">
            <Sidebar />
            <div className="addPatient__container">
                <div className="addPatient__title">
                    <h1>Adicionar Pacientes</h1>
                </div>
                <div className="addPatient__content">
                    < SCard title={"Formulário de pacientes"} children={
                        <Form className="addPatient__form" onSubmit={handleSubmit(addPatientAPI, onError)}>

                            <div className="addPatient__form--side">
                                <Form.Group className="addPatient__form--group">
                                    <Form.Label>Nome</Form.Label>
                                    <FormControl

                                        type="text"
                                        placeholder="Adicione o nome do paciente"
                                        {...register("name")}
                                        name="name"
                                    />
                                </Form.Group>

                                <Form.Group className="addPatient__form--group">
                                    <Form.Label>E-mail</Form.Label>
                                    <FormControl
                                        type="email"
                                        placeholder="Adicione o nome do paciente"
                                        {...register("email")}
                                        name="email"
                                    />
                                </Form.Group>
                            </div>
                            <Form.Group className="addPatient__form--group">
                                <Form.Label>Clínica</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder="Adicione o nome do paciente"
                                    {...register("insurance")}
                                    name="insurance"
                                />
                            </Form.Group>
                            <div className="addPatient__form--side">
                                <Form.Group className="addPatient__form--group">
                                    <Form.Label>Estado Cívil</Form.Label>
                                    <Form.Select {...register("status")} name="status">
                                        <option selected disabled>
                                            Selecione
                                        </option>
                                        <option>Solteiro</option>
                                        <option>Viúvo</option>
                                        <option>Casado</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="addPatient__form--group">
                                    <Form.Label>Sexo</Form.Label>
                                    <Form.Select {...register("sex")} name="sex">
                                        <option selected disabled>
                                            Selecione
                                        </option>
                                        <option>Masculino</option>
                                        <option>Feminino</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <Form.Group className="addPatient__form--group">
                                <Form.Label>Contato</Form.Label>
                                <FormControl
                                    type="text"
                                    placeholder="Adicione o nome do paciente"
                                    {...register("contact")}
                                    name="contact"
                                />
                            </Form.Group>
                            <Form.Group className="addPatient__form--group">
                                <Form.Label>Nascimento</Form.Label>
                                <FormControl
                                    type="date"
                                    placeholder="Adicione o nome do paciente"
                                    {...register("born")}
                                    name="born"
                                />
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
    );
};
