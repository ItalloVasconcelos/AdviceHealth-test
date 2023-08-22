import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-datepicker/dist/react-datepicker.css';

export const QCalendar = () => {
    const [selectDate, setSelectDate] = useState<Date | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState<any>([]);
    const [consult, setConsult] = useState<any>([]);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleDateChange = (date: Date | null) => {
        setSelectDate(date);
        handleShow();
    }
    const handleDateClick = (date: Date) => {

        handleShow();
    }
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

    const filterConsults = consult.filter((consult: any) => {
        const consultDate = new Date(consult.date);
        return (
            consultDate.getDate() === selectDate?.getDate() &&
            consultDate.getMonth() === selectDate?.getMonth() &&
            consultDate.getFullYear() === selectDate?.getFullYear()
        );
    })

    return (

        <div>
            <Calendar value={selectDate} onClickDay={handleDateClick} onChange={handleDateChange} />
            {selectDate && (
                <div>
                    <Modal show={showModal} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{`Consultas de ${selectDate?.toLocaleDateString()}`}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        {tableHeadConsults.map((item): any => (
                                            <th key={item.id}>{item.lang}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>

                                    {filterConsults.length > 0 ? (filterConsults.map((consult: any) => (
                                        <tr>
                                            <td>Mario</td>
                                            <td>{consult.insurance}</td>
                                            <td>{consult.date}</td>
                                            <td>{consult.start}</td>
                                        </tr>
                                    ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5}>
                                                Nenhuma consulta encontrada!
                                            </td>
                                        </tr>
                                    )}

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
            )}
        </div>
    )
}