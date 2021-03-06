import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesFullScreenCircleSlide from "../../components/Showcases-full-screen-circle-slide/showcases-full-screen-circle-slide.jsx";
import DarkTheme from "../../layouts/Dark";

const Mainpage = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <ShowcasesFullScreenCircleSlide />
    </DarkTheme>
  );
};

export default Mainpage;
