import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CartModal from "./CartModal";
import { useAppSelector } from "../../store/store";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";
interface ICart {
  cartShow: boolean;
}

const Cart = (props: ICart) => {
  const { cartShow } = props;
  const cartITems = useAppSelector((state) => state.cart.carts);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const [show, setShow] = useState(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-nocheck Error
  useEffect(() => {
    cartITems.forEach((item) => {
      console.log(item.price);
      // return item.price + item.price;
    });
  }, []);

  return (
    <CartModal show={cartShow} handleClose={() => setShow(false)}>
      <Table>
        <tbody>
          {cartITems.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  {item.price}{" "}
                  <PDFDownloadLink
                    document={<PdfDocument data={item} />}
                    fileName="buy-list.pdf"
                  >
                    Gerr
                  </PDFDownloadLink>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </Table>
    </CartModal>
  );
};

export default Cart;
