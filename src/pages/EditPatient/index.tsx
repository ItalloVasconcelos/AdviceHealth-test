import axios from "axios";
import { Button, Form, FormControl } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { SCard } from "../../components/Card";
import "./EditPatient.scss"
import { NavBar } from "../../components/Navbar";
const schema = yup.object().shape({
  name: yup.string().required("Digite o nome do Paciente"),
  email: yup.string().required("Digite o nome do Paciente"),
  insurance: yup.string().required("Digite o nome do Paciente"),
  contact: yup.number().required("Digite o nome do Paciente"),
});

export const EditPatient = () => {
  let navigate = useNavigate();
  const api = axios.create({
    baseURL: "http://localhost:3000",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { id } = useParams();
  const editPatientAPI = (data: any) =>
    api
      .patch(`patient/${id}`, data)
      .then(() => {
        console.log("Deu bom");
        navigate("/consult");
      })
      .catch(() => {
        console.log("Deu Ruim!");
      });
  useEffect(() => {
    api
      .get(`/patient/${id}`)
      .then((res) => {
        reset(res.data);
      })
      .catch((err) => alert("Ocorreu um erro" + err));
  }, []);
  return (
    <div className="editPatient">
      <NavBar />
      <div className="editPatient__container">
        <div className="editPatient__title">
          <h1>Editar Pacientes</h1>
        </div>
        <div className="editPatient__content">
                  < SCard title={"Formulário de pacientes"} children={
            <Form className="editPatient__form" onSubmit={handleSubmit(editPatientAPI)}>

              <div className="editPatient__form--side">
                <Form.Group className="editPatient__form--group">
                  <Form.Label>Nome</Form.Label>
                  <FormControl

                    type="text"
                    placeholder="Adicione o nome do paciente"
                    {...register("name")}
                    name="name"
                  />
                </Form.Group>

                <Form.Group className="editPatient__form--group">
                  <Form.Label>E-mail</Form.Label>
                  <FormControl
                    type="email"
                    placeholder="Adicione o nome do paciente"
                    {...register("email")}
                    name="email"
                  />
                </Form.Group>
              </div>
              <Form.Group className="editPatient__form--group">
                <Form.Label>Clínica</Form.Label>
                <FormControl
                  type="text"
                  placeholder="Adicione o nome do paciente"
                  {...register("insurance")}
                  name="insurance"
                />
              </Form.Group>
              <div className="editPatient__form--side">
                <Form.Group className="editPatient__form--group">
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
                <Form.Group className="editPatient__form--group">
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
              <Form.Group className="editPatient__form--group">
                <Form.Label>Contato</Form.Label>
                <FormControl
                  type="text"
                  placeholder="Adicione o nome do paciente"
                  {...register("contact")}
                  name="contact"
                />
              </Form.Group>
              <Form.Group className="editPatient__form--group">
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
