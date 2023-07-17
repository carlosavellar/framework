import React from "react";
import { Card, Button } from "react-bootstrap";
import { IProductStateItem } from "../../../interfaces/IProduct";

export default function ProductItem(props: IProductStateItem) {
  const { name, description, foto, price } = props;
  console.log(foto, "eee");
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={foto} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}-</Card.Text>

          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
