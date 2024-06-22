import { Container, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";
import InfoContext from "../../context/InfoContext";
import FMChart from "./FMChart";
import BlockCard from "../BlockCard";

const FMRight = () => {
  const { allFMData } = useContext(InfoContext);

  return (
    <div className="pmRight">
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
                color={"#ffffff"}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <BlockCard
                title={"閒置設備數"}
                text={value.idleEqpt}
                color={"#ffffff"}
              />
            </Col>
            <Col>
              <BlockCard
                title={"設備利用率"}
                text={Math.round((value.runEqpt / value.totalEqpt) * 100) + "%"}
                color={"#ffffff"}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              {" "}
              <BlockCard
                title={"故障設備數"}
                text={value.faultEqpt}
                color={"#ffffff"}
              />
            </Col>
            <Col>
              <BlockCard
                title={"設備故障率"}
                text={
                  Math.round((value.faultEqpt / value.totalEqpt) * 100) + "%"
                }
                color={"#ffffff"}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <FMChart />
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};
export default FMRight;
