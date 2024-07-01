import React, { useContext } from "react";
import dayjs from "dayjs";
//context
import InfoContext from "../../context/InfoContext";
//components
import RecordTable from "./RecordTable";
import BlockCard from "../BlockCard";
//react-bootstrap
import { Container, Row, Col, Stack } from "react-bootstrap";

const MMInfo = () => {
  //useContext
  const { MaintenanceLog } = useContext(InfoContext);
  const currentPosts = MaintenanceLog.slice(0, 10);

  return (
    <Stack gap={2} className=" mx-auto">
      <h5>維修</h5>
      <Container>
        <Row>
          <Col sm>
            <BlockCard
              title={"下次保養日期"}
              text={dayjs().month() + "/15"}
              color={"#ffffFF"}
            />
          </Col>
          <Col sm>
            <BlockCard
              title={"原廠保養日期"}
              text={dayjs().month() + "/20"}
              color={"#ffffFF"}
            />
          </Col>
        </Row>
      </Container>

      <h5>近期維修紀錄</h5>
      <RecordTable data={currentPosts} />
    </Stack>
  );
};
export default MMInfo;
