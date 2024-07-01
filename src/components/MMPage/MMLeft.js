//components
import ShowTime from "../Home/ShowTime";
import SearchBar from "./SearchBar";
import BlockCard from "../BlockCard";
//react-bootstrap
import { Container, Row, Col, Stack } from "react-bootstrap";

const MMLeft = () => {
  return (
    <Stack gap={1} className=" mx-auto">
      <div className="p-1">
        <ShowTime />
      </div>
      <div className="p-1">
        <SearchBar />
      </div>
      <Container>
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
    </Stack>
  );
};
export default MMLeft;
