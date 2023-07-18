import React, { useState } from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductItemForm = (props: any) => {
  const [getAmount, setAmount] = useState<number>(0);

  return (
    <Container>
      <Row>
        <Col>
          <div className="counter">
            <div className="btn__container">
              <Form.Control
                type="number"
                name="amount"
                min="0"
                max="5"
                size="sm"
                placeholder="0"
                value={getAmount}
                onChange={(event) => {
                  event.preventDefault();
                  setAmount(parseInt(event.target.value) as any);
                }}
              />
            </div>
          </div>
        </Col>
        <Col>
          <Button
            variant="primary"
            onClick={(e) => {
              console.log(e);
            }}
          >
            <MdOutlineAddShoppingCart />
            {" Add"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductItemForm;
