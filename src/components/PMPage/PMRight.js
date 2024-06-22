import { Container, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";

import InfoContext from "../../context/InfoContext";
import PMChart from "./PMChart";
import BlockCard from "../BlockCard";

const PMRight = () => {
  const { allDateInfo } = useContext(InfoContext);
  /*
  //現在日期
  const [currentDay, setCurrentDay] = useState(1);
  //抓過去五天的資料
  const [postsPerDay, setPostsPerDay] = useState(5);
  const [currentPosts, setCurrentPosts] = useState([]);

  // const lastPostIndex = currentDay * postsPerDay;
  //const firstPostIndex = lastPostIndex - postsPerDay;
  const lastPostIndex = 5;
  const firstPostIndex = 1;
  setCurrentPosts(data.slice(firstPostIndex, lastPostIndex));
*/
  return (
    <div className="pmRight">
      <Container>
        {allDateInfo.map((value) => (
          <>
            <Row>
              <h5>產品良率</h5>
              <Col>
                <BlockCard
                  title={"合格產品數"}
                  text={value.currentOutput}
                  color={"#ffffff"}
                />
              </Col>
              <Col>
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
              <Col>
                <BlockCard
                  title={"不良產品數"}
                  text={value.planOutput - value.currentOutput}
                  color={"#ffffff"}
                />
              </Col>
              <Col>
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
          </>
        ))}
        <Row>
          <Col>
            <PMChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PMRight;
