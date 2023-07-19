import React, { useState } from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addToCart, sumTotal } from "../../store/slices/cartSlice";

interface IProductItemForm {
  prodId: number;
  prodName: string;
  prodPrice: number;
}

const ProductItemForm = (props: IProductItemForm) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.carts);
  const { prodId, prodName, prodPrice } = props;
  const [getAmount, setAmount] = useState<number>(0);
  const [getTotal, setGetTotal] = useState<number>(0);

  const handlerSumTotal = () => {
    dispatch(sumTotal());
  };

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
            onClick={() => {
              dispatch(sumTotal());
              dispatch(
                addToCart({ id: prodId, name: prodName, price: prodPrice })
              );
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
