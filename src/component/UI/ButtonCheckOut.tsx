import React, { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { MdLocalGroceryStore } from "react-icons/md";
import { useAppSelector } from "../../store/store";
import CartModal from "./CartModal";

export default function ButtonCheckOut() {
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const cartItems = useAppSelector((state) => state.cart.total);
  const handlerShowModal = () => {
    setShowBtn(true);
  };
  const handleClose = () => {
    setShowBtn(false);
  };

  useEffect(() => {
    console.log(showBtn);
  }, [showBtn]);

  return (
    <>
      <Button
        size="lg"
        variant="info"
        onClick={() => {
          handlerShowModal();
          console.log(showBtn);
        }}
      >
        <Badge bg="danger" style={{ fontSize: "0.6rem" }}>
          {cartItems}
        </Badge>
        <MdLocalGroceryStore />
        Check out
      </Button>
      <CartModal showBtn={showBtn} handleClose={handleClose} />
    </>
  );
}
