import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { SCard } from "../../components/Card";
import { NavBar } from "../../components/Navbar";
import { SButton } from "../../components/Button";
import { MdEdit, MdDelete, MdAdd } from "react-icons/md";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ConsultPage.scss"

export const ConsultPage = () => {
    const tableHead = [
        { id: 1, lang: "Data" },
        { id: 2, lang: "Início" },
        { id: 3, lang: "Paciente" },
        { id: 4, lang: "Clinica" },
        { id: 5, lang: "Editar" },
        { id: 6, lang: "Deletar" },
    ];
    const [consult, setConsult] = useState<any>([]);
    const api = axios.create({
        baseURL: "http://localhost:3000",
    });
    useEffect(() => {
        api
            .get("/consult")
            .then((res) => setConsult(res.data))
            .catch((err) => alert("Ocorreu um erro" + err));
    }, []);
    function deleteConsult(id: any) {
        api
            .delete(`/consult/${id}`)
            .then((res) => {
                console.log("Deletado com Sucesso!");
            })
            .catch((error) => {
                console.log(error);
            });

    }
    return (
        <div className="consultPage">
            <NavBar />
            <div className="consultPage__container">
                <div className="consultPage__title">
                    <h1>Área da Consulta</h1>
                </div>
                <div className="consultPage__content">
                    <SCard
                        title={"Dados das Consultas"}

                        button={
                            <Link to="/add/consult">
                                <Button variant="primary">
                                    Adicionar uma Consulta <MdAdd size={22} />
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

                                {consult.map((consult: any, user: any) => (
                                    <tr>
                                        <td>{consult.date}</td>
                                        <td>{consult.start}</td>
                                        <td>{consult.insurance}</td>
                                        <td>{consult.insurance}</td>
                                        <td >
                                            <Link to={{ pathname: `/edit/consult/${consult._id}` }}>
                                                <Button variant="light">
                                                    <MdEdit />
                                                </Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <SButton
                                                onClick={() => deleteConsult(consult._id)}
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
