import React from 'react';
import { Form } from 'react-bootstrap';

export const SearchLocation = (props) => {

  const makeLocation = (event) => {
    if(event.key === 'Enter'){
      props.onEnter(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Enter Location</Form.Label>
      <Form.Control type="text" placeholder="Enter Location" onKeyPress={makeLocation} />
    </Form.Group>
  );
};
