import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoContext from "../../context/InfoContext";
import RecordTable from "./RecordTable";

import BlockCard from "../BlockCard";

const MMInfo = () => {
  //useContext
  const { MaintenanceLog } = useContext(InfoContext);
  const currentPosts = MaintenanceLog.slice(0, 10);

  return (
    <div className="building">
      <h5>維修</h5>
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
        <Row>
          <Col>
            <div className="tableArea">
              <h5>近期維修紀錄</h5>
              <RecordTable data={currentPosts} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default MMInfo;
