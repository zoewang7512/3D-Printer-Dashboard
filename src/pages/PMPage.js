import Header from "../layouts/Header";
import DateInfo from "../components/Home/DateInfo";

import "../components/styles.css";
import PMCenter from "../components/PMPage/PMCenter";
import PMRight from "../components/PMPage/PMRight";

const PMPage = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <DateInfo />
        <PMCenter />
        <PMRight />
      </div>
    </div>
  );
};
export default PMPage;
