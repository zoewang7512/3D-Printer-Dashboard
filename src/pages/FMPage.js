//components
import Header from "../layouts/Header";
import FMLeft from "../components/FMPage/FMLeft";
import FMCenter from "../components/FMPage/FMCenter";
import FMRight from "../components/FMPage/FMRight";
//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";
//css
import "../components/styles.css";

const FMPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="h-100 d-flex align-items-stretch">
        <Col sm md={6} xl={4}>
          <FMLeft />
        </Col>
        <Col sm md={6} xl={4}>
          <FMCenter />
        </Col>
        <Col sm md={12} xl={4}>
          <FMRight />
        </Col>
      </Row>
    </Container>
  );
};
export default FMPage;
