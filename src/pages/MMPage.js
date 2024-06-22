import "../components/styles.css";

import Header from "../layouts/Header";
import MMCenter from "../components/MMPage/MMCenter";
import MMLeft from "../components/MMPage/MMLeft";

const MMPage = () => {
  return (
    <div>
      <Header />
      <div className="mmpage">
        <MMLeft />
        <MMCenter />
      </div>
    </div>
  );
};
export default MMPage;
