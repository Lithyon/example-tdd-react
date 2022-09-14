import React, { ChangeEvent, FormEvent } from "react";
import DemandeRappelController from "./DemandeRappelController";
import { Button, Card, Col, Container, Form, Row } from "macif-components";
import Input from "../../components/Input";

interface DemandeRappelProperties {
  readonly controller: DemandeRappelController;
}

function onSubmit(controller: DemandeRappelController) {
  return (e: FormEvent) => {
    e.preventDefault();
    controller.onSubmit();
  };
}

export default function DemandeRappelView({ controller }: DemandeRappelProperties) {
  return (
    <Container className="mcf-mt--10">
      <Row>
        <Col>
          <Card body>
            <a href="/assurance/professionnels-et-entreprises/lld-professionnel">
              <span className="icon icon-fleche_gauche" />
              Retour
            </a>
            <Form onSubmit={onSubmit(controller)}>
              <h1>Demande de rappel</h1>
              <Input onChange={(e: ChangeEvent<HTMLInputElement>) => controller.onPrenomChange(e.target.value)} />
              <Button type="submit">Envoyer ma demande</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}