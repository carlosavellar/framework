import React from "react";
import { Badge, Button } from "react-bootstrap";
import { MdLocalGroceryStore } from "react-icons/md";

export default function ButtonCheckOut() {
  return (
    <Button size="lg" variant="info">
      <Badge bg="danger" style={{ fontSize: "0.6rem" }}>
        1
      </Badge>
      <MdLocalGroceryStore />
      Check out
    </Button>
  );
}
