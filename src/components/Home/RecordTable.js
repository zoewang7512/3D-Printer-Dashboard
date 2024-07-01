import React from "react";
//react-bootstrap
import { Table } from "react-bootstrap";

const RecordTable = ({ data }) => {
  return (
    <Table bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>日期</th>
          <th>機身號碼</th>
          <th>備註</th>
          <th>人員</th>
        </tr>
      </thead>
      <tbody style={{ fontSize: 16 }}>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.serialNum}</td>
            <td>{item.notes}</td>
            <td>{item.applicant}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default RecordTable;
