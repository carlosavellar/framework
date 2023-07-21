import React, { Fragment } from "react";
import "./RootComponent.css";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Pages/Profile";
import RootWrapper from "./UI/RootPageWrapper";
import ErrorPage from "./Pages/ErrorPage";

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
