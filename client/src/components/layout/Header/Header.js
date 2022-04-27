import React from "react";
import { ReactNavbar } from "overlay-navbar";
//import "overlay-navbar/ReactNavbar.min.css";
import logo from "../../../images/logo.png";
import profilePng from "../../../images/Profile.png";
const Header = () => {
  const options = {
    burgerColor: "#ffffff",
    burgerColorHover: "#ffffff",
    logo,
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "Search",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/search",

    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    searchIconSize: "2vmax",
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
    searchIconColor: "#eb4034",
    SearchIconElement: profilePng,
  };
  return <ReactNavbar {...options} />;
};

export default Header;
