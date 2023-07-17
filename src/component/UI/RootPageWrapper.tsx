import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import "./RootPageWrapper.css";
const RootPageWrapper = () => {
  return (
    <>
      <div>
        <Navigation />
        <Outlet />
      </div>
    </>
  );
};

export default RootPageWrapper;
