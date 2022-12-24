import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { SCard } from '../../components/Card'
import { NavBar } from '../../components/Navbar'
import { SButton } from '../../components/Button'
import { MdEdit, MdDelete } from "react-icons/md";

import { AddPatient } from './AddPatient'
import { EditPatient } from './EditPatient'

export const ConsultPage = () => {
    const tableHead = [
        { id: 1, lang: "Nome", },
        { id: 2, lang: "Status", },
        { id: 3, lang: "Clínica", },
        { id: 4, lang: "Email", },
        { id: 5, lang: "Contato", },
    ]
    const [user, setUser] = useState<any>([])
    const api = axios.create({
        baseURL: "http://localhost:3000",
    });
    useEffect(() => {
        api
            .get("/patient")
            .then((res) =>
                setUser(res.data)
            )
            .catch((err) => alert("Ocorreu um erro" + err))
    }, [])

    function deletePatient(id: any) {
        api.delete(`/patient/${id}`)
    }
    function handleClick(e: any) {
        e.preventDefault();
    }
    function handleClickEdit(e: any) {
        e.preventDefault();
    }

    return (
        <div>
            <NavBar />
            <div>
                <div>
                    <h1>Consult Page</h1>
                </div>
                <div>
                    <SCard title={'Dados dos Pacientes'} button={<SButton variant={"primary"} onClick={handleClick}>{<AddPatient />}</SButton>} size={48} >

                        <Table striped bordered hover>
                            <thead>
                                <tr>

                                    {tableHead.map((item: any) => (
                                        <th key={item.id}>{item.lang}
                                        </th>

                                    ))
                                    }


                                </tr>
                            </thead>
                            <tbody>
                                {user.map((user: any, key: any) => (
                                    <tr>
                                        <td key={key}>
                                            {user.name}
                                        </td>
                                        <td key={key}>
                                            {user.status}
                                        </td>
                                        <td key={key}>
                                            {user.insurance}
                                        </td>
                                        <td key={key}>
                                            {user.email}
                                        </td>
                                        <td key={key}>
                                            {user.contact}
                                        </td>
                                        <td key={key}>
                                            <SButton onClick={handleClickEdit}>
                                                <EditPatient />
                                            </SButton>
                                        </td>
                                        <td key={key}>
                                            <SButton
                                                onClick={() => { }}
                                                variant='danger'><MdDelete /></SButton>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>
                    </SCard>
                </div>


            </div>
        </div>
    )
}

