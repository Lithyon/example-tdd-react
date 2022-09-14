import { Modal } from "macif-components";
import React, { ChangeEventHandler } from "react";

interface InputProperties {
  readonly show: boolean;
}

export default function ModalTest({ show }: InputProperties) {
  return <Modal show={show}>
    <Modal.Header closeButton />
    <Modal.Body>Coucou les amis</Modal.Body>
  </Modal>;
}