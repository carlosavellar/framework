import React from "react";
import { Card, Col } from "react-bootstrap";
import { IProductStateItem } from "../../interfaces/IProduct";
// import placeholderImage from "./../../placeholder.jpg";
import "./ProductItem.css";
import ProductItemForm from "./ProductItemForm";
import { formatPrice } from "../../utils/formatPrice";

export default function ProductItem(props: IProductStateItem) {
  const {
    id: prodId,
    name: prodName,
    description: prodDescription,
    foto: prodFoto,
    price: prodPrice,
  } = props;

  const fotoRender = () => {
    return <Card.Img variant="top" src={prodFoto} />;
  };

  return (
    <Col md={3}>
      <Card style={{ width: "100%" }}>
        {fotoRender()}
        <Card.Body style={{ position: "relative" }}>
          <Card.Title className="product-title" data-bs-theme="light">
            {prodName}
          </Card.Title>
          <Card.Title>
            <b>{formatPrice(prodPrice)}</b>
          </Card.Title>
          <Card.Text>{prodDescription.substring(0, 81)}</Card.Text>

          <ProductItemForm
            prodId={prodId}
            prodName={prodName}
            prodPrice={prodPrice}
          />
        </Card.Body>
      </Card>
      <div style={{ height: "1.2rem" }}></div>
    </Col>
  );
}
