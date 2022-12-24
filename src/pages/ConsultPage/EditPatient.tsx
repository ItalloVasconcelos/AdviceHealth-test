
import axios from 'axios';
import { useEffect, useState } from 'react'
import { SForm, SFormSelect } from '../../components/Form';
import { SModal } from '../../components/Modal';
import { MdEdit, MdDelete } from "react-icons/md";

export const EditPatient = () => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState<any>()
    const [email, setEmail] = useState()
    const [insurance, setInsurance] = useState()
    const [status, setStatus] = useState()
    const [sex, setSex] = useState()
    const [contact, setContact] = useState()
    const [born, setBorn] = useState()
    const api = axios.create({
        baseURL: "http://localhost:3000",
    });

    const onEdit = async (id: any) => {
        api.patch(`/patient/${id}`, id)
            .then((res) => (console.log(res.data)))
            .catch((error) => (console.log(error)))
    }

    return (
        <div>
            <SModal titleButton={<MdEdit />} centered={true} size={'lg'} title={'Editar informações dos Pacientes'} closeButton={'Fechar'} saveButtonLabel={"Salvar!"}
                saveButton={(e: any) => onEdit(e)} >
                <SForm
                    name="name"
                    label={"Nome do Paciente"}
                    value={name}
                    type={"text"}
                    placeholder="Digite o nome do Paciente"

                />

                <SForm
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
                    name="born"
                    label={"Data de nascimento do Paciente"}
                    type="date"
                    placeholder="Digite a data de nascimento do Paciente"
                    onChange={(e: any) => {
                        setBorn(e.target.value)
                    }}
                    value={born}
                />
            </SModal>
        </div>
    )
}


