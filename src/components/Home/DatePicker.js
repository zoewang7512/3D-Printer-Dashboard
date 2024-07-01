import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
//context
import InfoContext from "../../context/InfoContext";
//css
import "react-calendar/dist/Calendar.css";
import "../styles.css";

const DatePicker = () => {
  //被選擇的那天
  const [selectedDate, setSelectedDate] = useState(new Date(), []);
  //useContext
  const {
    ProductionData,
    EquipmentLog,
    setAllDateInfo,
    setLast5data,
    setallFMData,
    setLast5FMdata,
  } = useContext(InfoContext);

  const handleOnclick = (date) => {
    const filteredData = ProductionData.filter((item) => {
      if (dayjs(item.date).isSame(dayjs(date), "day")) {
        return item;
      }
    });

    const filteredFMData = EquipmentLog.filter((item) => {
      if (dayjs(item.date).isSame(dayjs(date), "day")) {
        return item;
      }
    });

    //找到日期後的5筆資料

    const filteredDataIndex = ProductionData.findIndex((item) => {
      if (dayjs(item.date).isSame(dayjs(date), "day")) {
        return item;
      }
    });

    const data5 = ProductionData.slice(
      filteredDataIndex - 4,
      filteredDataIndex + 1
    );

    const filteredFMIndex = EquipmentLog.findIndex((item) => {
      if (dayjs(item.date).isSame(dayjs(date), "day")) {
        return item;
      }
    });

    const data5FM = EquipmentLog.slice(
      filteredFMIndex - 4,
      filteredFMIndex + 1
    );

    setAllDateInfo(filteredData);
    setLast5data(data5);
    setallFMData(filteredFMData);
    setLast5FMdata(data5FM);
  };
  return (
    <Calendar
      calendarType="gregory"
      locale={"en"}
      onChange={setSelectedDate}
      value={selectedDate}
      onClickDay={handleOnclick}
      maxDate={new Date()} // will not allow date later than today
      minDate={new Date(2024, 2, 23)} // will not allow date before 23 Mar 2024
      formatDay={(locale, date) => dayjs(date).format("D")}
      className="mx-auto" //移除後面的日期及顯示移除數字前方的0
    />
  );
};
export default DatePicker;
