import React, { useState, useContext } from "react";
import { CSVLink } from "react-csv";
import ReactPaginate from "react-paginate";
//context
import InfoContext from "../../context/InfoContext";
//components
import ModalPMForm from "./ModalPMForm";
import PMTable from "./PMTable";
//icons
import { AiFillPlusSquare } from "react-icons/ai";
//react-bootstrap
import { Table, Stack } from "react-bootstrap";

const PMCenter = () => {
  //show the　Modal to add new value
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { ProductionData } = useContext(InfoContext);

  const [postsPerPage, setPostsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + postsPerPage;
  const currentPosts = ProductionData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(ProductionData.length / postsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % ProductionData.length;
    setItemOffset(newOffset);
  };

  return (
    <Stack gap={2} className=" mx-auto">
      <Stack gap={2} direction="horizontal">
        <h5 className="me-auto">生產計劃表</h5>
        <AiFillPlusSquare
          onClick={handleShow}
          style={{ color: "#ff6d28", fontSize: "20px" }}
        />
      </Stack>
      <Table variant="dark" size="sm">
        <thead>
          <tr>
            <th>日期</th>
            <th>預計產量</th>
            <th>實際產量</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((item) => (
            <tr key={item.id}>
              <PMTable data={item} />
            </tr>
          ))}
        </tbody>
      </Table>

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
        data={ProductionData}
        filename={"my-pm-file.csv"}
        className="btn w-100 mb-3"
        style={{ backgroundColor: "#ff6d28" }}
        target="_blank"
      >
        Download CSV
      </CSVLink>

      <ModalPMForm show={show} handleClose={handleClose} />
    </Stack>
  );
};
export default PMCenter;
