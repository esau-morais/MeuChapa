import React from 'react';
import NavBar from '../component/navbar';
import SctOne from '../component/section1';
import SctTwo from '../component/section2';
import SctThree from '../component/section3';
import Footer from '../component/footer';

function Landing() {
  return (
    <>
      <NavBar />
      <SctOne />
      <SctTwo />
      <SctThree />
      <Footer />
    </>
  );
}

export default Landing;