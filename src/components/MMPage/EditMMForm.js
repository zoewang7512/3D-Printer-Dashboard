import React, { useState, useRef } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

const EditFMForm = ({ theData, handleClose }) => {
  //const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const id = theData.id;

  const [applicant, setApplicant] = useState(theData.applicant);
  const [notes, setNotes] = useState(theData.notes);
  const [serialNum, setSerialNum] = useState(theData.serialNum);
  const [date, setDate] = useState(theData.date);

  const dateRef = useRef();
  const applicantRef = useRef();
  const notesRef = useRef();
  const serialNumRef = useRef();
  const { handleMMEdit } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //setError("");
      setLoading(true);
      await handleMMEdit(
        id,
        applicantRef.current.value,
        dateRef.current.value,
        notesRef.current.value,
        serialNumRef.current.value
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
            id="maintenanceDate"
            name="maintenanceDate"
            type="date"
            defaultValue={date}
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
            defaultValue={serialNum}
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
            defaultValue={notes}
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
            defaultValue={applicant}
            ref={applicantRef}
            className="mb-3"
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
export default EditFMForm;
