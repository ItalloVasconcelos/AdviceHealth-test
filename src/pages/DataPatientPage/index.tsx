import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { SCard } from "../../components/Card";
import { NavBar } from "../../components/Navbar";
import { SButton } from "../../components/Button";
import { MdEdit, MdDelete, MdAdd } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DataPatient.scss"

export const DataPatientPage = () => {
    const tableHead = [
        { id: 1, lang: "Nome" },
        { id: 2, lang: "Status" },
        { id: 3, lang: "Clínica" },
        { id: 4, lang: "Email" },
        { id: 5, lang: "Contato" },
        { id: 6, lang: "Editar" },
        { id: 7, lang: "Deletar" },
    ];
    const [user, setUser] = useState<any>([]);
    const api = axios.create({
        baseURL: "http://localhost:3000",
    });
    useEffect(() => {
        api
            .get("/patient")
            .then((res) => setUser(res.data))
            .catch((err) => alert("Ocorreu um erro" + err));
    }, []);
    function deletePatient(id: any) {
        api
            .delete(`/patient/${id}`)
            .then((res) => {
                console.log("Deletado com Sucesso!");
            })
            .catch((error) => {
                console.log(error);
            });
        // setUser(user.filter((users: any) => user._id !== id))
    }
    return (
        <div className="consultPage">
            <NavBar />
            <div className="consultPage__container">
                <div className="consultPage__title">
                    <h1>Área do Paciente</h1>
                </div>
                <div className="consultPage__content">
                    <SCard
                        title={"Dados dos Pacientes"}
                        button={
                            <Link to="/add/patient">
                                <Button variant="primary">
                                    Adicionar um Paciente <MdAdd size={22} />
                                </Button>
                            </Link>
                        }
                    >
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    {tableHead.map((item: any) => (
                                        <th key={item.id}>{item.lang}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((user: any, id: any) => (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.status}</td>
                                        <td>{user.insurance}</td>
                                        <td>{user.email}</td>
                                        <td>{user.contact}</td>
                                        <td >
                                            <Link to={{ pathname: `/edit/patient/${user._id}` }}>
                                                <Button variant="light">
                                                    <MdEdit />
                                                </Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <SButton
                                                onClick={() => deletePatient(user._id)}
                                                variant="danger"
                                            >
                                                <MdDelete />
                                            </SButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </SCard>
                </div>
            </div>
        </div>
    );
};
