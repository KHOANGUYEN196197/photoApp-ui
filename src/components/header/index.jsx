import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const toVTI = (link) => {
    window.location.href = link;
  };
  const toLogin = () => {
    navigate("/login");
  };
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                toVTI("https://vtiacademy.edu.vn/");
              }}
            >
              VTI Academy
            </div>
          </Col>

          <Col xs="auto">
            <div onClick={toLogin}>Login</div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
