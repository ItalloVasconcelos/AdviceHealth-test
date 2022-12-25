
import axios from 'axios';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useEffect } from 'react';
const schema = yup.object().shape({
    name: yup.string().required("Digite o nome do Paciente"),
    email: yup.string().required("Digite o nome do Paciente"),
    insurance: yup.string().required("Digite o nome do Paciente"),
    contact: yup.number().required("Digite o nome do Paciente"),
})


export const EditPatient = () => {
    let navigate = useNavigate();
    const api = axios.create({
        baseURL: "http://localhost:3000",
    });
    const { register, handleSubmit, formState: { errors }, reset
    } = useForm({
        resolver: yupResolver(schema)
    })
    const { id } = useParams()
    const addPatientAPI = (data: any) => api.patch(`patient/${id}`, data)
        .then(() => {
            console.log("Deu bom")
            navigate('/consult')
        })
        .catch(() => {
            console.log("Deu Ruim!")
        })
    useEffect(() => {
        api
            .get(`/patient/${id}`)
            .then((res) => {
                reset(res.data)
            })
            .catch((err) => alert("Ocorreu um erro" + err))
    }, [])
    return (
        <div className='addingPatient__form'>
            <Form onSubmit={handleSubmit(addPatientAPI)}>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <FormControl
                        type='text'
                        placeholder='Adicione o nome do paciente'
                        {...register("name")}
                        name="name"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <FormControl
                        type='email' placeholder='Adicione o nome do paciente'
                        {...register("email")}
                        name="email"
                    />

                </Form.Group>
                <Form.Group>
                    <Form.Label>Plano de Saúde</Form.Label>
                    <FormControl
                        type='text' placeholder='Adicione o nome do paciente'
                        {...register("insurance")}
                        name="insurance"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contato</Form.Label>
                    <FormControl type="text" placeholder='Adicione o nome do paciente'
                        {...register("contact")}
                        name="contact"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nascimento</Form.Label>
                    <FormControl type="date" placeholder='Adicione o nome do paciente'
                        {...register("born")}
                        name="born"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
        </div>
    )
}


