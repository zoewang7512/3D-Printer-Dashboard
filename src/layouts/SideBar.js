import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//context
import { useAuth } from "../context/AuthContext";
//react-bootstrap
import { Offcanvas } from "react-bootstrap";
//icons
import { BsTools } from "react-icons/bs";
import { TiPrinter } from "react-icons/ti";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const SideBar = ({ handleClose, show }) => {
  const [error, setError] = useState("");
  //const [userName,setUserName]= useState("");
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="sidebar">
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{
          backgroundColor: "#ff6d28",
          color: "#fff",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>您好 {currentUser?.email}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <Link to="/">
              <li>
                <TiPrinter className="sidebar-icons" />
                3D列印機設備管理面板
              </li>
            </Link>
            <Link to="/pm">
              <li>
                <AiOutlineCalendar className="sidebar-icons" />
                生產管理頁面
              </li>
            </Link>
            <Link to="/fm">
              <li>
                <TbDeviceDesktopAnalytics className="sidebar-icons" />
                設備管理頁面
              </li>
            </Link>
            <Link to="/mm">
              <li>
                <BsTools className="sidebar-icons" />
                維修管理頁面
              </li>
            </Link>
            <li onClick={handleLogOut}>
              {error && alert({ error })}
              <MdLogout className="sidebar-icons" id="logoutText" />
              登出
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default SideBar;
