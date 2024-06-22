import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoContext from "../../context/InfoContext";
import EqptAvailability from "./EqptAvailability";
import BlockCard from "../BlockCard";

const FMInfo = () => {
  const { allFMData } = useContext(InfoContext);

  return (
    <div className="mis">
      <h5>ROOM 4</h5>
      {allFMData.map((value) => (
        <Container>
          <Row>
            <Col>
              <BlockCard
                title={"總設備數"}
                text={value.totalEqpt}
                color={"#ffffff"}
              />
            </Col>
            <Col>
              <BlockCard
                title={"運行設備數"}
                text={value.runEqpt}
                color={"#00E7FF"}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <BlockCard
                title={"閒置設備數"}
                text={value.idleEqpt}
                color={"#ffffFF"}
              />
            </Col>
            <Col>
              <BlockCard
                title={"待修設備數"}
                text={value.faultEqpt}
                color={"#FF6D28"}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="CircularProgressbarArea">
                <h5 className="mb-4">設備妥善率</h5>
                <div className="eqptAvailability">
                  <EqptAvailability value={value} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};
export default FMInfo;
