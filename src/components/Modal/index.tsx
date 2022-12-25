import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { SButton } from "../Button";

type TSModal = {
  centered: boolean;
  size: string;
  title: string;
  children: any;
  titleButton?: any;
  closeButton: string;
  saveButton?: any;
  saveButtonLabel?: any;
};

export const SModal = (props: TSModal) => {
  const {
    size,
    centered,
    title,
    children,
    titleButton,
    closeButton,
    saveButton,
    saveButtonLabel,
  } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <SButton onClick={handleShow}>{titleButton}</SButton>

      <Modal size={"lg"} centered={centered} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <SButton variant="secondary" onClick={handleClose}>
            {closeButton}
          </SButton>
          <SButton variant="primary" onClick={saveButton}>
            {saveButtonLabel}
          </SButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
