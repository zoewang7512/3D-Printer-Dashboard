import React, { useContext } from "react";
//context
import InfoContext from "../../context/InfoContext";
//components
import ShowTime from "../Home/ShowTime";
import EqptAvailability from "../Home/EqptAvailability";
import DatePicker from "../Home/DatePicker";
//react-bootstrap
import { Stack } from "react-bootstrap";

const FMLeft = () => {
  const { allFMData } = useContext(InfoContext);
  return (
    <Stack gap={1} className=" mx-auto">
      <div className="p-1">
        <ShowTime />
      </div>
      <div className="p-1">
        <DatePicker />
      </div>
      <h5 className="mb-2"> 設備妥善率</h5>
      {allFMData.map((value) => (
        <div className="eqptAvailabilitySmall">
          <EqptAvailability value={value} />
        </div>
      ))}
    </Stack>
  );
};
export default FMLeft;
