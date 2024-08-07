import React, { useState } from "react";
import dayjs from "dayjs";
//context
import { useAuth } from "../../context/AuthContext";
//components
import EditForm from "./EditForm";
//react-bootstrap
import { Modal } from "react-bootstrap";
//icons
import { MdEdit, MdDeleteForever } from "react-icons/md";

const PMTable = ({ data }) => {
  const { handlePMDel } = useAuth();

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <td>{dayjs(data.date).format("YYYY/MM/DD")}</td>
      <td>{data.planOutput}</td>
      <td>{data.currentOutput}</td>
      <td>
        <MdEdit onClick={handleShow} />
      </td>
      <td>
        <MdDeleteForever onClick={() => handlePMDel(data.id)} />
      </td>

      <Modal
        show={show}
        onHide={handleClose}
        contentClassName="bg-dark"
        style={{ color: "white" }}
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>生產計劃表─編輯資料</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theData={data} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default PMTable;
