import dayjs from "dayjs";
import { useState, useEffect } from "react";

const ShowTime = () => {
  var now = dayjs().format("YYYY / MM / DD");

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="showtime">
      <h4>
        {now}
        <br />
        {dayjs(time).format("HH:mm:ss")}
      </h4>
    </div>
  );
};
export default ShowTime;
