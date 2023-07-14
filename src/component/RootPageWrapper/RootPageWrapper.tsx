import React from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import "./RootPageWrapper.css";
const RootPageWrapper = () => {
  return (
    <>
      {/* <Container className="e" fluid> */}
      <div>
        <Navigation />
        <Outlet />
      </div>
      {/* // </Container> */}
    </>
  );
};

export default RootPageWrapper;
