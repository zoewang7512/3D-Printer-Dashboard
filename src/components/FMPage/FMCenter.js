import React, { useState, useContext } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { AiFillPlusSquare } from "react-icons/ai";
import { CSVLink } from "react-csv";
import ReactPaginate from "react-paginate";
import InfoContext from "../../context/InfoContext";
import ModalFMForm from "./ModalFMForm";
import FMTable from "./FMTable";

const FMCenter = () => {
  //show the　Modal to add new value
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //EquipmentLog
  const { EquipmentLog } = useContext(InfoContext);
  //pagination
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + postsPerPage;
  const currentPosts = EquipmentLog.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(EquipmentLog.length / postsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % EquipmentLog.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="tableArea">
            <div className="tableHeader">
              <div></div>
              <div>
                <h5>設備管理紀錄</h5>
              </div>
              <div>
                <AiFillPlusSquare
                  onClick={handleShow}
                  style={{ color: "#ff6d28", fontSize: "20px" }}
                />
              </div>
            </div>
            <Table variant="dark">
              <thead>
                <tr>
                  <th>日期</th>
                  <th>總設備數</th>
                  <th>運行中</th>
                  <th>閒置</th>
                  <th>待修</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((item) => (
                  <tr key={item.id}>
                    <FMTable data={item} />
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />

          <CSVLink
            data={EquipmentLog}
            filename={"my-pm-file.csv"}
            className="btn w-100 mb-3"
            style={{ backgroundColor: "#ff6d28" }}
            target="_blank"
          >
            Download CSV
          </CSVLink>
        </Col>
      </Row>
      <ModalFMForm show={show} handleClose={handleClose} />
    </Container>
  );
};
export default FMCenter;
