import React, { useState, useRef } from "react";
//context
import { useAuth } from "../../context/AuthContext";
//react-bootstrap
import { Modal, Form, Button, Alert } from "react-bootstrap";

const ModalFMForm = ({ show, handleClose }) => {
  //const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dateRef = useRef();
  const totalEqptRef = useRef();
  const idleEqptRef = useRef();
  const runEqptRef = useRef();
  const faultEqptRef = useRef();
  const { handleFMNew } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //setError("");
      setLoading(true);
      await handleFMNew(
        totalEqptRef.current.value,
        dateRef.current.value,
        runEqptRef.current.value,
        idleEqptRef.current.value,
        faultEqptRef.current.value
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
          <Modal.Title>設備管理計劃表─新增資料</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/*error && <Alert variant="danger">{error}</Alert>*/}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="exampleDate">日期</Form.Label>
              <Form.Control
                id="equipmentDate"
                name="equipmentDate"
                type="date"
                ref={dateRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="totalEqpt">總設備數</Form.Label>
              <Form.Control
                id="equipmentTotalEqpt"
                name="equipmentTotalEqpt"
                type="number"
                ref={totalEqptRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="runEqpt">運行設備數</Form.Label>
              <Form.Control
                id="equipmentRunEqpt"
                name="equipmentRunEqpt"
                type="number"
                ref={runEqptRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="idleEqpt">閒置設備數</Form.Label>
              <Form.Control
                id="equipmentIdleEqpt"
                name="equipmentIdleEqpt"
                type="number"
                ref={idleEqptRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="faultEqpt">故障設備數</Form.Label>
              <Form.Control
                id="equipmentFaultEqpt"
                name="equipmentFaultEqpt"
                type="number"
                className="mb-3"
                ref={faultEqptRef}
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
export default ModalFMForm;
