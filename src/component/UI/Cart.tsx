import React, { useState } from "react";
import { Table } from "react-bootstrap";
import CartModal from "./CartModal";
import { useAppSelector } from "../../store/store";
interface ICart {
  cartShow: boolean;
}

const Cart = (props: ICart) => {
  const { cartShow } = props;
  const cartITems = useAppSelector((state) => state.cart.carts);
  const total = useAppSelector((state) => state.cart.total);
  const [show, setShow] = useState(false);
  return (
    <CartModal show={cartShow} handleClose={() => setShow(false)}>
      <Table>
        <tbody>
          {cartITems.map((item) => {
            return (
              <tr key={item.id}>
                <td>1</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>{total}</td>
          </tr>
        </tbody>
      </Table>
    </CartModal>
  );
};

export default Cart;
