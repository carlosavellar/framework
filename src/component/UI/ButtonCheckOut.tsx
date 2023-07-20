import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { MdLocalGroceryStore } from "react-icons/md";
import { useAppSelector } from "../../store/store";
import Cart from "./Cart";

export default function ButtonCheckOut() {
  const [show, setShow] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.total);
  const handlerShowModal = () => {
    setShow(true);
  };
  useEffect(() => {
    console.log(show);
  }, [show]);
  return (
    <>
      <Button size="lg" variant="info" onClick={() => setShow(true) as any}>
        <Badge bg="danger" style={{ fontSize: "0.6rem" }}>
          {cartItems}
        </Badge>
        <MdLocalGroceryStore />
        Check out
      </Button>
      <Cart cartShow={show} />
    </>
  );
}
