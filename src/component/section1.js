import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Desc1, Desc2, Section1 } from './main';

const SctOne = (props) => {
  return (
    <Section1 id="home" >
      <Container fluid="md">
        <Image  src="/images/Section 1.png" fluid />
        <Desc1>
          Viaje com mais segurança, saúde e entreterimento.
          O meu chapa é o seu mais novo companheiro de viagens.
        </Desc1> 
        <Desc2>Baixe agora</Desc2>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Image src="/images/Google Play.png" fluid  />
          </Col>
          <Col xs lg="2">
            <Image src="/images/App Store.png" fluid  />
          </Col>
        </Row>
      </Container>
    </Section1>
    
  );
}

export default SctOne;