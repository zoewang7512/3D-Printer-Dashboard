import React, { useState, useContext } from "react";
import dayjs from "dayjs";
import { CSVLink } from "react-csv";
import ReactPaginate from "react-paginate";
//context
import InfoContext from "../../context/InfoContext";
//components
import MMTable from "./MMTable";
import ModalMMForm from "./ModalMMForm";
//react-bootstrap
import { Table, Stack } from "react-bootstrap";
//icons
import { AiFillPlusSquare } from "react-icons/ai";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const MMCenter = () => {
  //show the　Modal to add new value
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { querydata, queryStartDate, queryEndDate, MaintenanceLog } =
    useContext(InfoContext);

  //filterdata
  const filteredData = MaintenanceLog.filter((item) => {
    return querydata.toLowerCase() === ""
      ? item
      : item.notes.toLowerCase().includes(querydata) ||
          item.serialNum.toLowerCase().includes(querydata) ||
          item.applicant.toLowerCase().includes(querydata);
  });
  const filteredTime = filteredData.filter((item) => {
    return queryStartDate === "" && queryEndDate === ""
      ? item
      : dayjs(item.date).isSameOrAfter(dayjs(queryStartDate)) &&
          dayjs(item.date).isSameOrBefore(dayjs(queryEndDate));
  });

  //pagination
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + postsPerPage;
  const currentPosts = filteredTime.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredTime.length / postsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % filteredTime.length;
    setItemOffset(newOffset);
  };

  return (
    <Stack gap={1} className=" mx-auto">
      <Stack gap={2} direction="horizontal">
        <h5 className="me-auto">維修管理頁面</h5>

        <AiFillPlusSquare
          onClick={handleShow}
          style={{ color: "#ff6d28", fontSize: "20px" }}
        />
      </Stack>

      <Table variant="dark">
        <thead>
          <tr>
            <th>日期</th>
            <th>機身號碼</th>
            <th>備註</th>
            <th>人員</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ fontSize: 16 }}>
          {currentPosts.map((item) => (
            <tr key={item.id}>
              <MMTable data={item} />
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
        data={filteredTime}
        filename={"my-mm-file.csv"}
        className="btn w-100"
        style={{ backgroundColor: "#ff6d28" }}
        target="_blank"
      >
        Download CSV
      </CSVLink>

      <ModalMMForm show={show} handleClose={handleClose} />
    </Stack>
  );
};
export default MMCenter;
