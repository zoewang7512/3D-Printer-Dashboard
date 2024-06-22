import { Alert, Form, Button } from "react-bootstrap";

import React, { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";

const EditForm = ({ theData }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const id = theData.id;
  const [currentOutput, setCurrentOutput] = useState(theData.currentOutput);
  const [planOutput, setPlanOutput] = useState(theData.planOutput);
  const [date, setDate] = useState(theData.date);
  const dateRef = useRef();
  const planOutputRef = useRef();
  const currentOutputRef = useRef();
  const { handlePMEdit } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await handlePMEdit(
        id,
        currentOutputRef.current.value,
        dateRef.current.value,
        planOutputRef.current.value
      );
    } catch {
      setError("資料新增錯誤");
    }
    setLoading(false);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          {error && <Alert color="danger">{error}</Alert>}

          <Form.Label htmlFor="exampleDate">日期</Form.Label>
          <Form.Control
            id="productionDate"
            name="productionDate"
            type="date"
            defaultValue={date}
            innerRef={dateRef}
            //onChange={nameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="planOutput">預計產量</Form.Label>
          <Form.Control
            id="productionPlanOutput"
            name="productionPlanOutput"
            //placeholder="輸入預計產量"
            type="text"
            defaultValue={planOutput}
            innerRef={planOutputRef}
            //onChange={nameChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="currentOutput">實際產量</Form.Label>
          <Form.Control
            id="productionCurrentOutput"
            name="productionCurrentOutput"
            className="mb-3"
            type="text"
            defaultValue={currentOutput}
            innerRef={currentOutputRef}
            //onChange={valueChange}
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default EditForm;
