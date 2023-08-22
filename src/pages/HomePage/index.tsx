import { useEffect, useState } from "react";
import { Button, Dropdown, DropdownButton, ProgressBar, Table } from "react-bootstrap";
import { SCard } from "../../components/Card";
import axios from "axios";
import "./HomePage.scss";
import 'react-calendar/dist/Calendar.css';
import { Sidebar } from "../../components/Sidebar";
import { QCalendar } from "../../components/Calendar";
import { BsBell, BsGear } from "react-icons/bs";


export const HomePage = () => {
  const [user, setUser] = useState<any>([]);
  const [consult, setConsult] = useState<any>([]);
  const api = axios.create({
    baseURL: "http://localhost:3000",
  });
  useEffect(() => {
    api
      .get("/patient")
      .then((res) => setUser(res.data))
      .catch((err) => alert("Ocorreu um erro" + err));
  }, []);
  useEffect(() => {
    api
      .get("/consult")
      .then((res) => setConsult(res.data))
      .catch((err) => alert("Ocorreu um erro" + err));
  }, []);

  const tableHeadConsults = [
    { id: 1, lang: "Nome" },
    { id: 2, lang: "Clínica" },
    { id: 3, lang: "Data" },
    { id: 4, lang: "Hora" },
    { id: 5, lang: "Status" },
  ];
  const tableHeadPatients = [
    { id: 1, lang: "Nome" },
    { id: 2, lang: "Email" },
    { id: 3, lang: "Clínica" },
  ];

  return (
    <> <Sidebar />
      <div className="home">
        <div className=" home__container">
          <div className="  home-">
            <div className="home-container__present">
              <h1>Olá! Bem vindo de volta {"Médico nome"} </h1>
              <h3>Aqui estão seus compromissos</h3>
            </div>
            <div>
              Filtro de pesquisa aqui
              <Button placeholder="Search" color="primary" />
            </div>

            <div>
              <Dropdown children={<BsBell />} />
              <Dropdown children={<BsGear />} />
            </div>
          </div>
          <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className="col">
            <div className="">
              <h4>Calendario</h4>
              <QCalendar />
            </div>
            <SCard
              width={65} height={15}
              title={"Próximas Consultas"}
              children={
                <Table bordered hover>
                  <thead>
                    <tr>
                      {tableHeadConsults.map((item): any => (
                        <th key={item.id}>{item.lang}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>

                    {consult.map((consult: any) => (
                      <tr>
                        <td>Mario</td>
                        <td>{consult.insurance}</td>
                        <td>{consult.date}</td>
                        <td>{consult.start}</td>
                      </tr>
                    ))}

                  </tbody>
                </Table>
              }
            />
          </section>

          <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} className="col">

            <div className="home__container--consult">
            <SCard
              width={28} height={22}
              title={"Consultas Concluídas"}
              children={
                <Table bordered hover>
                  <thead>
                <tr>
                      {tableHeadConsults.map((item): any => (
                        <th key={item.id}>{item.lang}</th>
                      ))}
                </tr>
                  </thead>
                  <tbody>

                    {consult.map((consult: any) => (
                      <tr>
                        <td>Mario</td>
                        <td>{consult.insurance}</td>
                        <td>{consult.date}</td>
                        <td>{consult.start}</td>
                      </tr>
                    ))}

              </tbody>
            </Table>
          }
            />
            </div>
          <SCard
            width={40}
            title={"Pacientes"}
            children={
              <div>
                <Table bordered hover>
                  <thead>
                    {tableHeadPatients.map((item): any => (
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
          </section>
        </div>
      </div>
    </>
  );
};
