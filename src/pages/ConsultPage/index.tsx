import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { SCard } from "../../components/Card";
import { NavBar } from "../../components/Navbar";
import { SButton } from "../../components/Button";
import { MdEdit, MdDelete } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ConsultPage = () => {
    const tableHead = [
        { id: 1, lang: "Nome" },
        { id: 2, lang: "Status" },
        { id: 3, lang: "Clínica" },
        { id: 4, lang: "Email" },
        { id: 5, lang: "Contato" },
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
        <div>
            <NavBar />
            <div>
                <div>
                    <h1>Consult Page</h1>
                </div>
                <div>
                    <SCard
                        title={"Dados dos Pacientes"}
                        size={48}
                        button={
                            <Link to="/adding">
                                <Button variant="info">
                                    <MdEdit />
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
                                        <td>
                                            <Link to={{ pathname: `/edit/${user._id}` }}>
                                                <Button variant="info">
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
