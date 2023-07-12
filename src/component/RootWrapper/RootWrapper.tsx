import React from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const RootWrapper = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootWrapper;
