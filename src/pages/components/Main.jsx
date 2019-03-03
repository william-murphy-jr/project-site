import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header.jsx";
import Display1 from "./Display1.jsx";
import Display2 from "./Display2.jsx";
import Display3 from "./Display3.jsx";

const Main = () => {
  return (
    <Container>
      <Header />
      <Display1 />
      <Display2 />
      <Display3 />
    </Container>
  );
};

export default Main;
