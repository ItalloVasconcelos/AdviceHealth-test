import axios from "axios";
import { useState } from "react";

import { SForm, SFormSelect } from "../../components/Form"
import { SModal } from "../../components/Modal"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

export const AddPatient = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [insurance, setInsurance] = useState()
    const [status, setStatus] = useState()
    const [sex, setSex] = useState()
    const [contact, setContact] = useState()
    const [born, setBorn] = useState()

    const schema = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
        insurance: yup.string().required(),
        contact: yup.string().required(),

    })
    const api = axios.create({
        baseURL: "http://localhost:3000",
    });
    const onSubmit = async (e: any) => {
        const post = {
            name: name,
            email: email,
            insurance: insurance,
            status: status,
            sex: sex,
            contact: contact,
            born: born,
        }
        api.post('/patient', post)
            .then((response) => (console.log(response.data)))
            .catch((error) => { console.log(error) })
    }
    const { register, handleSubmit, formState: { errors } } = useForm({

        resolver: yupResolver(schema)
    })



    return (
        <div>

            <SModal titleButton='Abrir Modal asdasd' centered={true} size={'lg'} title={'Adicionar Paciente'} closeButton={'Fechar'} saveButtonLabel={"Salvar!"} saveButton={(e: any) => onSubmit(e)} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <SForm
                        {...register("name")}
                        name="name"
                        label={"Nome do Paciente"}
                        onChange={(e: any) => {
                            setName(e.target.value)
                        }}
                        value={name}
                        placeholder="Digite o nome do Paciente"
                        type={"text"}
                    />

                    <SForm
                        {...register("email")}
                        name="email"
                        label={"Email do Paciente"}
                        type={"email"}
                        placeholder="Digite o email do Paciente"
                        onChange={(e: any) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                    />

                    <SForm
                        {...register("insurance")}
                        name="insurance"
                        label={"Plano de saúde do Paciente"}
                        type={"text"}
                        placeholder="Digite Plano de saúde  Paciente"
                        onChange={(e: any) => {
                            setInsurance(e.target.value)
                        }}
                        value={insurance}
                    />

                    <SFormSelect label={"Relacionamento"} name="status" onChange={(e: any) => {
                        setStatus(e.target.value)
                    }} >
                        <option>Solteio</option>
                        <option>Casado</option>
                        <option>Viuvo</option>
                    </SFormSelect>
                    <SFormSelect label={"Sexo"} name="sex" onChange={(e: any) => {
                        setSex(e.target.value)
                    }}  >
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </SFormSelect>

                    <SForm
                        {...register("contact")}
                        name="contact"
                        label={"Telefone"}
                        type={"text"}
                        placeholder="Digite o telefone do Paciente"
                        onChange={(e: any) => {
                            setContact(e.target.value)
                        }}
                        value={contact}
                    />
                    <SForm
                        {...register("born")}
                        name="born"
                        label={"Data de nascimento do Paciente"}
                        type="date"
                        placeholder="Digite a data de nascimento do Paciente"
                        onChange={(e: any) => {
                            setBorn(e.target.value)
                        }}
                        value={born}
                    />
                </form>
            </SModal>


        </div >
    )
}
