import React from "react";
import { Card, Button } from "react-bootstrap";
import { IProductStateItem } from "../../../../interfaces/IProduct";

export default function ProductItem(props: IProductStateItem) {
  const { name, description, foto, price } = props;

  console.log(`http://localhost:3000${foto}`);
  const renderImage = foto !== undefined ? foto : "Sem foto caramba";

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <img src={foto.toString()} alt={name} />
        <Card.Img variant="top" src={foto.toString()} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
