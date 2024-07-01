import React, { useState, useRef } from "react";
//context
import { useAuth } from "../../context/AuthContext";
//react-bootstrap
import { Modal, Form, Button, Alert } from "react-bootstrap";

const ModalMMForm = ({ show, handleClose }) => {
  //const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dateRef = useRef();
  const applicantRef = useRef();
  const notesRef = useRef();
  const serialNumRef = useRef();
  const { handleMMNew } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //setError("");
      setLoading(true);
      await handleMMNew(
        applicantRef.current.value,
        dateRef.current.value,
        notesRef.current.value,
        serialNumRef.current.value
      );
    } catch {
      //setError("資料新增錯誤");
      alert("資料新增成功");
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
          {/*error && <Alert variant="danger">{error}</Alert>*/}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="exampleDate">日期</Form.Label>
              <Form.Control
                id="maintenanceDate"
                name="maintenanceDate"
                type="date"
                ref={dateRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="serialNum">機身號碼</Form.Label>
              <Form.Control
                id="serialNum"
                name="serialNum"
                type="text"
                ref={serialNumRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="maintenanceNotes">備註</Form.Label>
              <Form.Control
                id="maintenanceNotes"
                name="maintenanceNotes"
                type="text"
                ref={notesRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="maintenanceApplicant">人員</Form.Label>
              <Form.Control
                id="applicant"
                name="applicant"
                type="text"
                ref={applicantRef}
                className="mb-3"
                required
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
