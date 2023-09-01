import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import "./RootPageWrapper.css";
const RootPageWrapper = () => {
  return (
    <>
      <div className="wrapper-beige">
        <Navigation />
        <Outlet />
      </div>
    </>
  );
};

export default RootPageWrapper;
