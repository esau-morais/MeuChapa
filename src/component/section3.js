import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Section3 } from './main';
import { Title, Label, Input } from './form';

function SctThree() {
  return(
    <Section3 id="como-obter">
      <Container>
        <Row style={{ alignItems: 'center' }}>
          <Col>
            <Image src="/images/Section 3.png" fluid />
          </Col>
          <Col md={{ span: 7, offset: 0 }}>
            <Title>Quer receber informações sobre, Meu chapa?</Title>
            <Row><Label>Como você se chama?</Label></Row>
            <Input placeholder="Digite seu nome completo" />
            <Row><Label>Você trabalha:</Label></Row>
            <Row style={{ textAlign: 'center' }}>
              <input type="radio" name="radio" id="op1" /> 
              <Label htmlFor="op1"> Para empresa</Label>
              <input type="radio" name="radio" id="op2" /> 
              <Label htmlFor="op2"> Sou autônomo</Label>
            </Row>
            <Row><Label>Qual o seu e-mail</Label></Row>
            <Input placeholder="nome@email.com.br" />
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="primary" style={{ margin: '1em 0' }}>Enviar</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section3>
  );
}

export default SctThree;