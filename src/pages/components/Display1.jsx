import React from "react";
import { Row, Col } from "react-bootstrap";
import AppCss from "../css/display.module.css";
import spaceDefender from "../assets/space-defender-screen-shot-2019-03-03.png";


const Display1 = () => {
  console.log("spaceDefender: ", spaceDefender);
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Row>
          <Col md={{ span: 6}}>
            <div><img  className={AppCss.displayImg} src={ spaceDefender } /></div>
          </Col>
          <Col md={{ span: 6}}>
            <h3>Title</h3><p>description here</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
};

export default Display1;
