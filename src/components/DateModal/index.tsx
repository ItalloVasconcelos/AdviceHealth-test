import { Button, Modal, Table } from "react-bootstrap";

type DateModalProps = {
    show: boolean;
    handleClose: () => void;
    selectedDate: Date | null;
    consults: any[]
}

export const DateModal = ({ show, handleClose, selectedDate, consults, }: DateModalProps) => {

    const tableHeadConsults = [
        { id: 1, lang: "Nome" },
        { id: 2, lang: "Clínica" },
        { id: 3, lang: "Data" },
        { id: 4, lang: "Hora" },
        { id: 5, lang: "Status" },
    ];
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{`Consultas de ${selectedDate?.toLocaleDateString()}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Table bordered hover>
                <thead>
                    <tr>
                        {tableHeadConsults.map((item) => (
                            <th key={item.id}>{item.lang}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {consults.length > 0 ? (
                        consults.map((consult: any) => (
                            <tr key={consult.id}>
                                <td>{consult.patient}</td>
                                <td>{consult.clinic}</td>
                                <td>{consult.date}</td>
                                <td>{consult.start}</td>
                                <td>{consult.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5}>Nenhuma consulta encontrada</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Fechar
            </Button>
        </Modal.Footer>
    </Modal>
}