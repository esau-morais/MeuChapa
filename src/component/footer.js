import React from 'react';
import { Image } from 'react-bootstrap';
import { Final, Copyright } from './main';

function Footer() {
  return(
    <Final>
      <Image src="/images/Footer.png" /> 
      <Copyright>© 2020 todos os direitos reservados</Copyright>
    </Final>
  );
}

export default Footer;