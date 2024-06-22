import React, { useState } from "react";
import dayjs from "dayjs";
import { useAuth } from "../../context/AuthContext";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { Modal } from "react-bootstrap";
import EditFMForm from "./EditFMForm";

const FMTable = ({ data }) => {
  const { handleFMDel } = useAuth();

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <td>{dayjs(data.date).format("YYYY/MM/DD")}</td>
      <td>{data.totalEqpt}</td>
      <td>{data.runEqpt}</td>
      <td>{data.idleEqpt}</td>
      <td>{data.faultEqpt}</td>
      <td>
        <MdEdit onClick={handleShow} />
      </td>
      <td>
        <MdDeleteForever onClick={() => handleFMDel(data.id)} />
      </td>

      <Modal
        show={show}
        onHide={handleClose}
        contentClassName="bg-dark"
        style={{ color: "white" }}
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>設備管理計劃表─編輯資料</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditFMForm theData={data} />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default FMTable;
