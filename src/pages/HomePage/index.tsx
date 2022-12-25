import { useEffect, useState } from "react";
import { ProgressBar, Table } from "react-bootstrap";
import { SCard } from "../../components/Card";
import { NavBar } from "../../components/Navbar";
import axios from "axios";
import "./HomePage.scss";

export const HomePage = () => {
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

  const tableHead = [
    { id: 1, lang: "Nome" },
    { id: 2, lang: "Email" },
    { id: 3, lang: "Plano" },
  ];

  return (
    <div className="home">
      <NavBar />
      <div className="home__container--title">
        <h1>Home Page</h1>
      </div>

      <div className="home__container--content">
        <SCard
          size={26}
          title={"Próxiamas Consultas"}
          children={
            <Table bordered hover>
              <thead>
                <tr>
                  {tableHead.map((item): any => (
                    <th key={item.id}>{item.lang}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                <tr>
                  {tableHead.map((item): any => (
                    <td key={item.id}>{item.lang}</td>
                  ))}
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Rocinha</td>
                </tr>
                <tr>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>Casa da Joana</td>
                </tr>
              </tbody>
            </Table>
          }
        />

        <SCard
          size={40}
          title={"Pacientes"}
          children={
            <div>
              <Table bordered hover>
                <thead>
                  {tableHead.map((item): any => (
                    <th key={item.id}>{item.lang}</th>
                  ))}
                </thead>
                <tbody>
                  {user.map((user: any, key: any) => (
                    <tr>
                      <td key={key.id}>{user.name}</td>
                      <td key={key.id}>{user.email}</td>
                      <td key={key.id}>{user.insurance}</td>
                    </tr>
                  ))}
                </tbody>

                {/* <tbody>

                                    {tableBody.map((item): any => (
                                        <><tr>
                                            <td key={item.id}>{item.pacient}</td>
                                            <td key={item.id}>
                                                {item.activity}
                                            </td>
                                            <td key={item.id}>
                                                {item.local}
                                            </td>
                                        </tr></>
                                    ))}


                                </tbody> */}
              </Table>
              <ProgressBar max={100}>
                <ProgressBar
                  striped
                  variant="success"
                  label="Ativo"
                  now={10}
                  key={1}
                />
                <ProgressBar striped variant="warning" now={50} key={2} />
                <ProgressBar striped variant="danger" now={10} key={3} />
              </ProgressBar>
            </div>
          }
        />
      </div>
      <div className="home__container--content"></div>
      {/* <div>
                <SCard size={40} title={"Pacientes"}
                    children={
                        <div>
                            <Table bordered hover>
                                <thead >
                                    <tr>
                                        {tableHead.map((item): any => (
                                            <th key={item.id}>{item.lang}</th>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>

                                    {tableBody.map((item): any => (
                                        <><tr>
                                            <td key={item.id}>{item.pacient}</td>
                                            <td key={item.id}>
                                                {item.activity}
                                            </td>
                                            <td key={item.id}>
                                                {item.local}
                                            </td>
                                        </tr></>
                                    ))}


                                </tbody>
                            </Table>
                            <ProgressBar max={100}>
                                <ProgressBar striped variant="success" label="Ativo" now={10} key={1} />
                                <ProgressBar striped variant="warning" now={50} key={2} />
                                <ProgressBar striped variant="danger" now={10} key={3} />
                            </ProgressBar>

                        </div>
                    } />
            </div> */}
      <div>
        <h2>Lembrete de consultas - Lista de pacientes e</h2>
      </div>
    </div>
  );
};
