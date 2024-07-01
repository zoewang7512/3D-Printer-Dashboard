//components
import Header from "../layouts/Header";
import MMCenter from "../components/MMPage/MMCenter";
import MMLeft from "../components/MMPage/MMLeft";
//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";
//css
import "../components/styles.css";
const MMPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="h-100 d-flex align-items-center">
        <Col sm md={4}>
          <MMLeft />
        </Col>
        <Col sm md={8}>
          <MMCenter />
        </Col>
      </Row>
    </Container>
  );
};
export default MMPage;
