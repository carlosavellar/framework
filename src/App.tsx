import React, { useState } from "react";
import "./App.css";
import Login from "./component/Login/Login";
import Home from "./component/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import MenuNavBar from "./component/Navigation/Navigation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from "./component/Profile/Profile";
import Header from "./component/Navigation/Navigation";
import RootWrapper from "./component/RootWrapper/RootWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootWrapper />,
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
