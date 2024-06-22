import React, { useState, useRef } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

const ModalMMForm = ({ show, handleClose }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dateRef = useRef();
  const applicantRef = useRef();
  const notesRef = useRef();
  const serialNumRef = useRef();
  const { handleMMNew } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await handleMMNew(
        applicantRef.current.value,
        dateRef.current.value,
        notesRef.current.value,
        serialNumRef.current.value
      );
    } catch {
      setError("資料新增錯誤");
    }
    setLoading(false);
    handleClose();
  }

  return (
    <div className="addmodal">
      <Modal
        show={show}
        onHide={handleClose}
        contentClassName="bg-dark"
        style={{ color: "white" }}
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>維修紀錄表─新增資料</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label for="exampleDate">日期</Form.Label>
              <Form.Control
                id="maintenanceDate"
                name="maintenanceDate"
                type="date"
                innerRef={dateRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label for="serialNum">機身號碼</Form.Label>
              <Form.Control
                id="serialNum"
                name="serialNum"
                type="text"
                innerRef={serialNumRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label for="maintenanceNotes">備註</Form.Label>
              <Form.Control
                id="maintenanceNotes"
                name="maintenanceNotes"
                type="text"
                innerRef={notesRef}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label for="maintenanceApplicant">人員</Form.Label>
              <Form.Control
                id="applicant"
                name="applicant"
                type="text"
                innerRef={applicantRef}
                className="mb-3"
              />
            </Form.Group>

            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ModalMMForm;
