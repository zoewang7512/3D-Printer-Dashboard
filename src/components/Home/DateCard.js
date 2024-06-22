import Progress from "../Progress";
import BlockCard from "../BlockCard";
import { Row, Col } from "react-bootstrap";

const DateCard = ({ value }) => {
  return (
    <div>
      <Row>
        <Col md="6">
          <BlockCard
            title={"生產計劃量"}
            text={value.planOutput}
            color={"#ffffff"}
          />
        </Col>
        <Col md="6">
          <BlockCard
            title={"實際產量"}
            text={value.currentOutput}
            color={"#ffffff"}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Progress value={value} />
        </Col>
      </Row>
    </div>
  );
};
export default DateCard;
