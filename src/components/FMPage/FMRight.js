import React, { useContext } from "react";
//context
import InfoContext from "../../context/InfoContext";
//components
import FMChart from "./FMChart";
import BlockCard from "../BlockCard";
//react-bootstrap
import { Container, Row, Col, Stack } from "react-bootstrap";

const FMRight = () => {
  const { allFMData } = useContext(InfoContext);

  return (
    <Stack gap={2} className=" mx-auto">
      {allFMData.map((value) => (
        <Container>
          <Row>
            <Col sm>
              <BlockCard
                title={"總設備數"}
                text={value.totalEqpt}
                color={"#ffffff"}
              />
            </Col>
            <Col sm>
              <BlockCard
                title={"運行設備數"}
                text={value.runEqpt}
                color={"#ffffff"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <BlockCard
                title={"閒置設備數"}
                text={value.idleEqpt}
                color={"#ffffff"}
              />
            </Col>
            <Col sm>
              <BlockCard
                title={"設備利用率"}
                text={Math.round((value.runEqpt / value.totalEqpt) * 100) + "%"}
                color={"#ffffff"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <BlockCard
                title={"故障設備數"}
                text={value.faultEqpt}
                color={"#ffffff"}
              />
            </Col>
            <Col sm>
              <BlockCard
                title={"設備故障率"}
                text={
                  Math.round((value.faultEqpt / value.totalEqpt) * 100) + "%"
                }
                color={"#ffffff"}
              />
            </Col>
          </Row>
        </Container>
      ))}
      <FMChart />
    </Stack>
  );
};
export default FMRight;
