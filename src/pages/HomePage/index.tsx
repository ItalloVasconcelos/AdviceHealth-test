import { useEffect, useState } from "react";
import { Button, Modal, ProgressBar, Table } from "react-bootstrap";
import { SCard } from "../../components/Card";
import { NavBar } from "../../components/Navbar";
import axios from "axios";
import "./HomePage.scss";
import Calendar from 'react-calendar'
import { MdNavigateNext } from "react-icons/md";
import 'react-calendar/dist/Calendar.css';


export const HomePage = () => {
  const [user, setUser] = useState<any>([]);
  const [consult, setConsult] = useState<any>([]);
  const [calendar, setCalendar] = useState(new Date())
  const [showModal, setShowModal] = useState(false)
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
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  function onClickDate() {
    handleShow()


  }
  return (
    <div className="home">
      <NavBar />
      <div className="home__container">
      <div className="home__container--title">
        <h1>Home Page</h1>
      </div>

      <div className="home__container--content">
          <div className="home__container--consult">
        <SCard
              width={28} height={22}
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
          <div className="home__container--calendar">
            <SCard title={"Calendário"} width={24} children={
              <div>
                <Calendar value={calendar} onClickDay={onClickDate} onChange={setCalendar} nextLabel={<MdNavigateNext />} />
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{`Consultas de hoje!`}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{<Table bordered hover>
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
                  </Table>}</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            } />
          </div>
        </div>

        <div>

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

        </div>
      </div>
    </div>
  );
};
