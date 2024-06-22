import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import dayjs from "dayjs";
import { useAuth } from "../../context/AuthContext";
import EditMMForm from "./EditMMForm";

const MMTable = ({ data }) => {
  const { handleMMDel } = useAuth();

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <td>{dayjs(data.date).format("YYYY/MM/DD")}</td>
      <td>{data.serialNum}</td>
      <td>{data.notes}</td>
      <td>{data.applicant}</td>

      <td>
        <MdEdit onClick={handleShow} />
      </td>
      <td>
        <MdDeleteForever onClick={() => handleMMDel(data.id)} />
      </td>

      <Modal
        show={show}
        onHide={handleClose}
        contentClassName="bg-dark"
        style={{ color: "white" }}
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>維修管理表─編輯資料</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditMMForm theData={data} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default MMTable;
