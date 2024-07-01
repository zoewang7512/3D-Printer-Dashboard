import Header from "../layouts/Header";
//components
import DateInfo from "../components/Home/DateInfo";
import PMCenter from "../components/PMPage/PMCenter";
import PMRight from "../components/PMPage/PMRight";
//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";
//css
import "../components/styles.css";

const PMPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="h-100 d-flex align-items-stretch">
        <Col sm md={6} xl={4}>
          <DateInfo />
        </Col>
        <Col sm md={6} xl={4}>
          <PMCenter />
        </Col>
        <Col sm md={12} xl={4}>
          <PMRight />
        </Col>
      </Row>
    </Container>
  );
};
export default PMPage;
