import React from "react";
import { Table } from "react-bootstrap";
import { useAppSelector } from "../../store/store";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";

const Cart = () => {
  const cartITems = useAppSelector((state) => state.cart.carts);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <>
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
                  ></PDFDownloadLink>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Total</td>

            <td></td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
