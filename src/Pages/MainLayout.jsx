
import React from "react";
import { Outlet } from "react-router-dom";
import MenuSwitcher from "../Components/MenuSwitcher";

const MainLayout = ({ setMenu }) => {
  return (
    <>
      <MenuSwitcher onChange={setMenu} />
      <Outlet />
    </>
  );
};

export default MainLayout;
