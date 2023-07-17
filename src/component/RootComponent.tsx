import React, { useState } from "react";
import "./RootComponent.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Pages/Profile";
import RootWrapper from "./UI/RootPageWrapper";
import ErrorPage from "./Pages/ErrorPage";
import Cart from "./UI/Cart";
import CartProvider from "../store/CartProvider";

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

const RootComponent = () => {
  const [cartShow, setCartShow] = useState(true);

  const handleClose = () => setCartShow(false);
  const handleShow = () => setCartShow(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <CartProvider>
      {cartShow && <Cart cartShow={cartShow} />}
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default RootComponent;
