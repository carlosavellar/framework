import React from "react";
import { Form } from "react-bootstrap";

export default function CounterInput() {
  return (
    <div className="counter">
      <div className="btn__container">
        <Form.Control size="sm" type="number" min="0" max="5" placeholder="0" />
      </div>
    </div>
  );
}
