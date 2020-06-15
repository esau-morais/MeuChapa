import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Desc3, Desc4, Divider, Highlight, Section2 } from './main';

const SctTwo = (props) => {
  return (
    <>
      <Section2 id="vantagens">
        <Container>
          <Row style={{ alignItems: 'center' }}>
            <Col md={{ span: 5, offset: 0 }}>
              <Desc3>
              Agora <Highlight>você pode ter mais segurança</Highlight> e 
              <Highlight> qualidade de vida</Highlight> ao 
              viajar por todo o Brasil.
              </Desc3>
            </Col>
            <Col md={{ span: 4, offset: 0 }}>
              <Image  src="/images/Section 2-1.png" />
            </Col>
          </Row>
        </Container>
      </Section2>
      <Section2>
        <Container>
        <Row style={{ alignItems: 'center' }}>
          <Col md={{ span: 5, offset: 0 }}>
            <Desc3>
            Siga a rota <Highlight>mais saudável</Highlight>
            </Desc3>
            <Divider />
            <Desc4>
              O meu chapa te ajuda a encontrar maneiras de ter uma 
              vida saudável através de dicas de alimentação, 
              exercícios laborais e indicando os melhores lugares 
              para descansar ou comer que estão próximos a você.
            </Desc4>
          </Col>
          <Col md={{ span: 4, offset: 2 }}>
            <Image  src="/images/Section 2-2.png" />
          </Col>
        </Row>
        </Container>
      </Section2>
      <Section2 style={{ margin: '-2em 0' }}>
        <Container>
        <Row style={{ alignItems: 'center' }}>
          <Col md={{ span: 5, offset: 0 }}>
            <Desc3>
            <Highlight>Não fique sozinho</Highlight> na estrada
            </Desc3>
            <Divider />
            <Desc4>
              Meu chapa oferece a funcionalidade de conversar com 
              outros caminhoneiros próximos a você, como também uma 
              central  que você pode entrar em contato e receber ajuda em 
              emergências ou informações sobre vários serviços disponíveis.
              Ele reune suas preferências de entretenimento, para você 
              viajar conectado a canais de musicas, podcasts, tornando sua viagem mais legal.
            </Desc4>
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <Image  src="/images/Section 2-3.png" />
          </Col>
        </Row>
        </Container>
      </Section2>
    </>
  );
}

export default SctTwo;