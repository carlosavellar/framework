import React, { Fragment } from "react";
import "./RootComponent.css";
import Home from "../pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "../pages/Profile";
import RootWrapper from "./ui/RootPageWrapper";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const RootComponent = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default RootComponent;
