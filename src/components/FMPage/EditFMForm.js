import React, { useState, useRef } from "react";
//context
import { useAuth } from "../../context/AuthContext";
//react-bootstrap
import { Alert, Form, Button } from "react-bootstrap";

const EditFMForm = ({ theData, handleClose }) => {
  //const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const id = theData.id;
  const [totalEqpt, setTotalEqpt] = useState(theData.totalEqpt);
  const [runEqpt, setRunEqpt] = useState(theData.runEqpt);
  const [idleEqpt, setIdleEqpt] = useState(theData.idleEqpt);
  const [faultEqpt, setFaultEqpt] = useState(theData.faultEqpt);

  const [date, setDate] = useState(theData.date);
  const dateRef = useRef();
  const totalEqptRef = useRef();
  const idleEqptRef = useRef();
  const runEqptRef = useRef();
  const faultEqptRef = useRef();
  const { handleFMEdit } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //setError("");
      setLoading(true);
      await handleFMEdit(
        id,
        totalEqptRef.current.value,
        dateRef.current.value,
        runEqptRef.current.value,
        idleEqptRef.current.value,
        faultEqptRef.current.value
      );
    } catch {
      //setError("資料修改錯誤");
      alert("資料修改錯誤");
    }

    setLoading(false);
    handleClose();
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          {/*error && <Alert variant="danger">{error}</Alert>*/}
          <Form.Label htmlFor="exampleDate">日期</Form.Label>
          <Form.Control
            id="equipmentDate"
            name="equipmentDate"
            type="date"
            defaultValue={date}
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
            defaultValue={totalEqpt}
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
            defaultValue={runEqpt}
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
            defaultValue={idleEqpt}
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
            defaultValue={faultEqpt}
            ref={faultEqptRef}
            className="mb-3"
            required
          />
        </Form.Group>
        <Button color="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default EditFMForm;
