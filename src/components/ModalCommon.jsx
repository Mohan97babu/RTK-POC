import { Button, Modal } from "react-bootstrap";

const ModalCommon = ({ show, handleClose, header, body, acceptText,closeText,bodyClassName }) => (
  <Modal show={show} onHide={handleClose} >
    <Modal.Header closeButton className="bg-second bg-text">
      <Modal.Title>{header}</Modal.Title>
    </Modal.Header>
    <Modal.Body className={bodyClassName}>{body}</Modal.Body>
   {closeText && <Modal.Footer>
      {closeText && <Button variant="secondary" onClick={handleClose}>
        {closeText}
      </Button>}
     {acceptText && <Button variant="primary" onClick={handleClose}>
        {acceptText}
      </Button>}
    </Modal.Footer>}
  </Modal>
);

export default ModalCommon;
