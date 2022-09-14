import { Form } from "macif-components";
import React, { ChangeEventHandler } from "react";

interface InputProperties {
  readonly onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ onChange }: InputProperties) {
  return <Form.Group controlId="prenom">
    <Form.Label>Prénom</Form.Label>
    <Form.Control autoComplete="given-name"
                  onChange={onChange}
                  required />
  </Form.Group>;
}