import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h1>Header Section</h1>
      </Col>
    </Row>
  )
};

export default Header;
