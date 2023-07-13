import React from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
const RootPageWrapper = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootPageWrapper;