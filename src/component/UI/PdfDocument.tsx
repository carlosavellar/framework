import React, { useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useAppSelector } from "../../store/store";
import { Table } from "react-bootstrap";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const CartPrintPdf = () => {
  const cartITems = useAppSelector((state) => state.cart.carts);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const [data, setdata] = useState<object[]>([{ nome: "e" }]);
  return (
    <Table>
      <tbody>
        {cartITems.map((item, index) => {
          return (
            <tr key={index}>
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
          <td>{totalPrice}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default function PdfDocument(props: any) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>
            {props.children}
            {<div>Div</div>}----
          </Text>
        </View>
      </Page>
    </Document>
  );
}
