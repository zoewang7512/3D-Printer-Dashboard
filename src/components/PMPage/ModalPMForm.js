import { Modal, Form, Button, Alert } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";

const ModalPMForm = ({ show, handleClose }) => {
  //const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dateRef = useRef();
  const planOutputRef = useRef();
  const currentOutputRef = useRef();
  const { handlePMNew } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //setError("");
      setLoading(true);
      await handlePMNew(
        currentOutputRef.current.value,
        dateRef.current.value,
        planOutputRef.current.value
      );
    } catch {
      //setError("資料新增錯誤");
      alert("資料新增錯誤");
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
          <Modal.Title>生產計劃表─新增資料</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*error && <Alert variant="danger">{error}</Alert>*/}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="exampleDate">日期</Form.Label>
              <Form.Control
                id="productionDate"
                name="productionDate"
                type="date"
                ref={dateRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="planOutput">預計產量</Form.Label>
              <Form.Control
                id="productionPlanOutput"
                name="productionPlanOutput"
                type="number"
                ref={planOutputRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="currentOutput">實際產量</Form.Label>
              <Form.Control
                id="productionCurrentOutput"
                name="productionCurrentOutput"
                type="number"
                ref={currentOutputRef}
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
export default ModalPMForm;
