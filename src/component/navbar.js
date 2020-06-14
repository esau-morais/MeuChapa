import React from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { Desc1 } from './main';

function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Seja Bem Vindo ao Meu Chapa!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Desc1>
          O App do Meu Chapa ainda não foi lançado :( <br/>
          Mas fica ligado, já já você poderá usar nosso app quando quiser!
        </Desc1>
      </Modal.Body>
    </Modal>
  );
}

function NavBar() {
  const [modalShow, setModalShow] = React.useState(false);

  return(
    <Navbar bg="white" expand="lg">
      <Navbar.Brand href="#home">
      <img
        src="/images/Logo.png"
        width="142"
        height="50"
        alt="Meu Chapa"
      />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ outline: 'none' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" style={{ color: '#1da8d5' }}>Home</Nav.Link>
          <Nav.Link href="#vantagens" style={{ color: '#1da8d5' }}>Vantagens</Nav.Link>
          <Nav.Link href="#como-obter" style={{ color: '#1da8d5' }}>Como obter</Nav.Link>
        </Nav>
        <Button variant="outline-primary" onClick={() => setModalShow(true)}>
          Baixe o App
        </Button>
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;