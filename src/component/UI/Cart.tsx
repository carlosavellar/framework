import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CartModal from "./CartModal";

interface ICart {
  cartShow: boolean;
}

const Cart = (props: ICart) => {
  const [show, setShow] = useState(false);
  const { cartShow } = props;
  useEffect(() => {
    setShow(cartShow);
  }, [cartShow]);

  return (
    <CartModal show={show} handleClose={() => setShow(false)}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Products</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Total</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </CartModal>
  );
};

export default Cart;
