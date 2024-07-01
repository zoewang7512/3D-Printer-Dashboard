import React, { useContext } from "react";
//context
import InfoContext from "../../context/InfoContext";
//components
import EqptAvailability from "./EqptAvailability";
import BlockCard from "../BlockCard";
//react-bootstrap
import { Container, Row, Col, Stack } from "react-bootstrap";

const FMInfo = () => {
  const { allFMData } = useContext(InfoContext);

  return (
    <Stack gap={2} className=" mx-auto">
      <h5>ROOM 4</h5>
      {allFMData.map((value) => (
        <>
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
                  color={"#00E7FF"}
                />
              </Col>
            </Row>
            <Row>
              <Col sm>
                <BlockCard
                  title={"閒置設備數"}
                  text={value.idleEqpt}
                  color={"#ffffFF"}
                />
              </Col>
              <Col sm>
                <BlockCard
                  title={"待修設備數"}
                  text={value.faultEqpt}
                  color={"#FF6D28"}
                />
              </Col>
            </Row>
          </Container>
          <h5>設備妥善率</h5>
          <div className="eqptAvailability">
            <EqptAvailability value={value} />
          </div>
        </>
      ))}
    </Stack>
  );
};
export default FMInfo;
