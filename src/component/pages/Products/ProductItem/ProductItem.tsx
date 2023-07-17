import React from "react";
import { Card, Col } from "react-bootstrap";
import { IProductStateItem } from "../../../../interfaces/IProduct";
import placeholderImage from "./../../../../placeholder.jpg";
import "./ProductItem.css";
import BuyButton from "../../../utils/Buttons/BuyButton";

export default function ProductItem(props: IProductStateItem) {
  const { name, description, foto, price } = props;

  return (
    <Col md={3}>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={
            typeof foto === "number"
              ? "./../../../../" + foto
              : placeholderImage
          }
        />
        <Card.Body className="position: 'relative'">
          <Card.Title className="product-title" data-bs-theme="light">
            {name}
          </Card.Title>
          <Card.Text>{description.substring(0, 81)}</Card.Text>
          <BuyButton />
        </Card.Body>
      </Card>
      <div style={{ height: "1.2rem" }}></div>
    </Col>
  );
}
