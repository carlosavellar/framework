import React, { useState } from "react";
import "./App.css";
import Login from "./component/pages/Login/Login";
import Home from "./component/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./component/pages/Profile/Profile";
import RootWrapper from "./component/RootPageWrapper/RootPageWrapper";
import ErrorPage from "./component/pages/ErrorPage/ErrorPage";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
