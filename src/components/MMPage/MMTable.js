import React, { useState } from "react";
import dayjs from "dayjs";
//context
import { useAuth } from "../../context/AuthContext";
//components
import EditMMForm from "./EditMMForm";
//react-bootstrap
import { Modal } from "react-bootstrap";
//icons
import { MdEdit, MdDeleteForever } from "react-icons/md";

const MMTable = ({ data }) => {
  const { handleMMDel } = useAuth();

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <td>{dayjs(data.date).format("YYYY-MM-DD")}</td>
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
          <EditMMForm theData={data} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default MMTable;
