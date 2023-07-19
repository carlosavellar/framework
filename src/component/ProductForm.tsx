import React, { useState } from "react";
import { useAppDispatch } from "../store/store";
import { addProduct } from "../store/slices/productsSlice";

export default function ProductForm() {
  const [prodName, setProdName] = useState<string>("");
  const [prodDescription, setProdDescription] = useState<string>("");
  const [prodPrice, setProdPrice] = useState<number>(0);
  const dispatch = useAppDispatch();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(
          addProduct({
            name: prodName,
            description: prodDescription,
            price: prodPrice,
          })
        );
        console.log("w");
      }}
    >
      <label htmlFor="name">
        Name
        <input
          name="name"
          id="name"
          type="string"
          value={prodName}
          onChange={(event) => setProdName(event.target.value)}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          id="description"
          name="description"
          type="string"
          value={prodDescription}
          onChange={(event) => setProdDescription(event.target.value)}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          name="price"
          type="number"
          value={prodPrice}
          onChange={(event) => setProdPrice(parseInt(event.target.value))}
        />
      </label>
      <button type="submit">Send products</button>
    </form>
  );
}
