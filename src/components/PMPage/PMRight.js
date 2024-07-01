import React, { useContext } from "react";
//context
import InfoContext from "../../context/InfoContext";
//components
import PMChart from "./PMChart";
import BlockCard from "../BlockCard";
//react-bootstrap
import { Container, Row, Col, Stack } from "react-bootstrap";

const PMRight = () => {
  const { allDateInfo } = useContext(InfoContext);

  return (
    <Stack gap={2} className=" mx-auto">
      <h5>產品良率</h5>
      {allDateInfo.map((value) => (
        <>
          <Container>
            <Row>
              <Col sm>
                <BlockCard
                  title={"合格產品數"}
                  text={value.currentOutput}
                  color={"#ffffff"}
                />
              </Col>
              <Col sm>
                <BlockCard
                  title={"良品率"}
                  text={
                    Math.round((value.currentOutput / value.planOutput) * 100) +
                    "%"
                  }
                  color={"#ffffff"}
                />
              </Col>
            </Row>

            <Row>
              <Col sm>
                <BlockCard
                  title={"不良產品數"}
                  text={value.planOutput - value.currentOutput}
                  color={"#ffffff"}
                />
              </Col>
              <Col sm>
                <BlockCard
                  title={"不良率"}
                  text={
                    Math.round(
                      ((value.planOutput - value.currentOutput) /
                        value.planOutput) *
                        100
                    ) + "%"
                  }
                  color={"#ffffff"}
                />
              </Col>
            </Row>
          </Container>
        </>
      ))}

      <PMChart />
    </Stack>
  );
};
export default PMRight;
