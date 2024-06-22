import { Container, Row, Col } from "react-bootstrap";
import ShowTime from "../Home/ShowTime";
import SearchBar from "./SearchBar";
import BlockCard from "../BlockCard";

const MMLeft = () => {
  return (
    <div className="mmleft">
      <Container>
        <Row>
          <Col>
            <ShowTime />
          </Col>
        </Row>
        <Row>
          <SearchBar />
        </Row>

        <Row>
          <Col>
            <BlockCard
              title={"下次保養日期"}
              text={"03/15"}
              color={"#ffffFF"}
            />
          </Col>
          <Col>
            <BlockCard
              title={"原廠保養日期"}
              text={"03/20"}
              color={"#ffffFF"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MMLeft;
