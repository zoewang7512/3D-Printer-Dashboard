import React from "react";
import Header from "../layouts/Header";
import "../components/styles.css";
//components
import DateInfo from "../components/Home/DateInfo";
import FMInfo from "../components/Home/FMInfo";
import MMInfo from "../components/Home/MMInfo";
//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="h-100 d-flex align-items-center">
        <Col sm md={6} xl={4}>
          <DateInfo />
        </Col>
        <Col sm md={6} xl={4}>
          <FMInfo />
        </Col>
        <Col sm md={12} xl={4}>
          <MMInfo />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
