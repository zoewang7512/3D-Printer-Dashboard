import React from "react";
import Header from "../layouts/Header";

import DateInfo from "../components/Home/DateInfo";
import FMInfo from "../components/Home/FMInfo";
import MMInfo from "../components/Home/MMInfo";

import "../components/styles.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <DateInfo />
        <FMInfo />
        <MMInfo />
      </div>
    </>
  );
};
export default Home;
