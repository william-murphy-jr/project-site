import React from "react";
import { Row, Col } from "react-bootstrap";
import AppCss from "../css/app.module.css";

const Header = () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <div className={AppCss.center}>
          <img className={ AppCss.portfolioImage } 
            src="https://media.licdn.com/dms/image/C5603AQGiy8tT-719Xg/profile-displayphoto-shrink_200_200/0?e=1557360000&v=beta&t=8KD2bWVP8ilhTrQg4Z_Y5qYxp1TZXQk93U7cj4cvK-k"
          />
          <h2>William "Bill" Murphy</h2>
          <h4>Software Engineer</h4>
          <span className={`${AppCss.email}`}>
            <a href="mailto:bill559m@gmail.com" target="_blank">
              bill559m@gmail.com
            </a>
          </span>
          <span className={`${AppCss.github}`}>
            <a href="https://github.com/william-murphy-jr" target="_blank">
              https://github.com/william-murphy-jr
            </a>
          </span>
          <span className={`${AppCss.linkedin}`}>
            <a href="https://www.linkedin.com/in/william-murphy-jr/" target="_blank">
              https://www.linkedin.com/in/william-murphy-jr/
            </a>
          </span>
          <span className={`${AppCss.resume}`}>
            <a href="https://docs.google.com/document/d/1SWY9IHpO6UK9ZTqKU_Mjz5e7MU7oMaOZSdRyxvlOaq8/edit"
              target="_blank">
              Resume
            </a>
          </span>
         
        </div>
      </Col>
    </Row>
  )
};

export default Header;
