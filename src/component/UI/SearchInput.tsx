import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function SearchInput() {
  return (
    <InputGroup className="mb-3 mt-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Button
      </Button>
    </InputGroup>
  );
}

export default SearchInput;

//   <InputGroup className="mb-3">
//     <Button variant="outline-secondary" id="button-addon1">
//       Button
//     </Button>
//     <Form.Control
//       aria-label="Example text with button addon"
//       aria-describedby="basic-addon1"
//     />
//   </InputGroup>;
