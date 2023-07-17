import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import CounterInput from "../../UI/CounterInput/CounterInput";

const ProductItemForm = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Container>
      <Row>
        <Col>
          <CounterInput />
        </Col>
        <Col>
          <Button
            variant="primary"
            disabled={isLoading}
            // @ts-expect-error Taking too tough to solve this type. ass.: José Carlos
            onClick={!isLoading ? handleClick : null}
          >
            <MdOutlineAddShoppingCart />
            {isLoading ? "Loading…" : " Add"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductItemForm;
