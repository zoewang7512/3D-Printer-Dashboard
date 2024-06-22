import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { TiPrinter, TiThMenu } from "react-icons/ti";
import SideBar from "./SideBar";

const Header = () => {
  const { currentUser } = useAuth();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <div className="header-left">
        <span>
          <Link to="/">
            <TiPrinter style={{ color: "#FF6D28" }} />
            3D列印機設備管理面板
          </Link>
        </span>
      </div>

      <div className="header-right">
        <span>
          {currentUser ? (
            <TiThMenu className="header-menu" onClick={handleShow} />
          ) : (
            ""
          )}
        </span>
        {/*showSideBar && <SideBar closeBar={setShowSideBar} />*/}
        <SideBar show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};
export default Header;
