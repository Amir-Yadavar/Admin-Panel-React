import React from "react";
import "./Sidebar.css";
import "./SidebarLocal.css";
import LineStyleIcone from "@mui/icons-material/LineStyle";
import TimeLineIcone from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StoreFrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

export default function Sidebar() {
  let sidebar = document.getElementsByClassName("sidebar");

  const closeDashbord = () => {
    sidebar[0].style.opacity = "0";
    sidebar[0].style.visibility = "hidden";
    // iconSidebar[0].style.opacity = "1";
    // iconSidebar[0].style.visibility = "visible";
  };

  const openSidebar = () => {
    // let iconSidebar = document.getElementsByClassName("menu-icone-sidebar");
    sidebar[0].style.opacity = "1";
    sidebar[0].style.visibility = "visible";
  };

  return (
    <>
      <section className="sidebar">
        <section className="container-side">
          <section className="part">
            <h3>
              Dashbord{" "}
              <span onClick={closeDashbord} className="close-icon-sidebar">
                <CloseIcon />
              </span>
            </h3>
            <ul>
              <Link to={"./"} className="link">
                <li className="active">
                  <LineStyleIcone className="slide-icons" />
                  Home
                </li>
              </Link>
              <Link to={"/analytics"} className="link">
                <li>
                  <TimeLineIcone className="slide-icons" />
                  Analytics
                </li>
              </Link>
              <Link to={"/sales"} className="link">
                <li>
                  <BarChartIcon className="slide-icons" />
                  Sales
                </li>
              </Link>
            </ul>
          </section>

          <section className="part">
            <h3>Quock Menu</h3>
            <ul>
              <Link to={"./users"} className="link">
                <li>
                  <PermIdentityIcon className="slide-icons" />
                  Users
                </li>
              </Link>
              <Link to={"./newUser"} className="link">
                <li>
                  <PersonAddAltIcon className="slide-icons" />
                  New User
                </li>
              </Link>
              <Link to={"./products"} className="link">
                <li>
                  <StoreFrontIcon className="slide-icons" />
                  Products
                </li>
              </Link>
              <Link to={"/readmore"} className="link">
                <li>
                  <InfoIcon className="slide-icons" />
                  Read More
                </li>
              </Link>
            </ul>
          </section>

          <section className="part">
            <h3>Notifications</h3>
            <ul>
              <Link to={"./mail"} className="link">
                <li>
                  <MailOutlineIcon className="slide-icons" />
                  Mail
                </li>
              </Link>
              <li >
                <DynamicFeedIcon className="slide-icons" />
                Feedback
              </li>
              <Link to={"./messages"} className="link">
                <li>
                  <ChatBubbleOutlineIcon className="slide-icons" />
                  Messages
                </li>
              </Link>
            </ul>
          </section>
        </section>
      </section>
      <div className="menu-icone-sidebar">
        <MenuIcon onClick={openSidebar} />
      </div>
    </>
  );
}
