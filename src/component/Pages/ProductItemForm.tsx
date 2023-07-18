import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTotal } from "../../store/slices/productSlice";

const ProductItemForm = (props: any) => {
  const dispatchAddTotal = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [amount, setAmount] = useState<string>("");

  const getProductAmountHandler = () => {
    dispatchAddTotal(addTotal(amount));
  };

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading, getProductAmountHandler]);

  const handleClick = () => setLoading(true);

  return (
    <Container>
      <Row>
        <Col>
          <div className="counter">
            <div className="btn__container">
              <Form.Control
                name="Price"
                type="text"
                min="0"
                max="5"
                // value={3}
                // onChange={(event) =>
                //   setAmount((event.target.value as any) * props.prodPrice)
                // }
                placeholder="0"
              />
            </div>
          </div>
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
