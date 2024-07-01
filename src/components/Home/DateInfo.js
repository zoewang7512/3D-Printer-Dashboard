import React, { useContext } from "react";
//context
import InfoContext from "../../context/InfoContext";
//components
import ShowTime from "./ShowTime";
import DateCard from "./DateCard";
import DatePicker from "./DatePicker";
//react-bootstrap
import { Stack } from "react-bootstrap";
//css
import "../styles.css";

const DateInfo = () => {
  const { allDateInfo } = useContext(InfoContext);
  return (
    <Stack gap={1} className=" mx-auto">
      <div className="p-1">
        <ShowTime />
      </div>
      <div className="p-1">
        <DatePicker />
      </div>
      <div className="p-1">
        {allDateInfo.map((value) => (
          <DateCard value={value} />
        ))}
      </div>
    </Stack>
  );
};
export default DateInfo;
