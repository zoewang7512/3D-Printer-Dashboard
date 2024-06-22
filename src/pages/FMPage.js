import "../components/styles.css";

import Header from "../layouts/Header";
import FMLeft from "../components/FMPage/FMLeft";
import FMCenter from "../components/FMPage/FMCenter";
import FMRight from "../components/FMPage/FMRight";

const FMPage = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <FMLeft />
        <FMCenter />
        <FMRight />
      </div>
    </div>
  );
};
export default FMPage;
