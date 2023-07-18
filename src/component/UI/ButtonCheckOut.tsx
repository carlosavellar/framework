import React from "react";
import { Badge, Button } from "react-bootstrap";
import { MdLocalGroceryStore } from "react-icons/md";

interface ButtonCheckOut {
  getTotal: number;
}

export default function ButtonCheckOut(props: ButtonCheckOut) {
  return (
    <Button size="lg" variant="info">
      <Badge bg="danger" style={{ fontSize: "0.6rem" }}>
        {props.getTotal}
      </Badge>
      <MdLocalGroceryStore />
      Check out
    </Button>
  );
}
