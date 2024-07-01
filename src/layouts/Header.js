import React, { useState } from "react";
//react-router
import { Link } from "react-router-dom";
//context
import { useAuth } from "../context/AuthContext";
//components
import { TiPrinter, TiThMenu } from "react-icons/ti";
//icons
import SideBar from "./SideBar";

const Header = () => {
  const { currentUser } = useAuth();

  //siderbar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header vh-10">
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
        <SideBar show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};
export default Header;
