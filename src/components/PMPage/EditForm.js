import React, { useState, useRef } from "react";
////context
import { useAuth } from "../../context/AuthContext";
//react-bootstrap
import { Alert, Form, Button } from "react-bootstrap";

const EditForm = ({ theData, handleClose }) => {
  //const [error, setError] = useState("");
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
      //setError("");
      setLoading(true);
      await handlePMEdit(
        id,
        currentOutputRef.current.value,
        dateRef.current.value,
        planOutputRef.current.value
      );
    } catch {
      // setError("資料修改錯誤");
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
            id="productionDate"
            name="productionDate"
            type="date"
            defaultValue={date}
            ref={dateRef}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="planOutput">預計產量</Form.Label>
          <Form.Control
            id="productionPlanOutput"
            name="productionPlanOutput"
            //placeholder="輸入預計產量"
            defaultValue={planOutput}
            ref={planOutputRef}
            type="number"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="currentOutput">實際產量</Form.Label>
          <Form.Control
            id="productionCurrentOutput"
            name="productionCurrentOutput"
            className="mb-3"
            defaultValue={currentOutput}
            ref={currentOutputRef}
            type="number"
            required
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
