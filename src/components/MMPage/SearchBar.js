import { useContext } from "react";
import { Form, InputGroup, Row, Col } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import InfoContext from "../../context/InfoContext";

const SearchBar = () => {
  const { setQuerydata, setQueryStartDate, setQueryEndDate } =
    useContext(InfoContext);

  return (
    <div className="searchBar">
      <h5>搜尋</h5>
      <InputGroup>
        <Form.Control
          placeholder="搜尋機身號碼/人員/備註..."
          onChange={(e) => setQuerydata(e.target.value)}
        />

        <InputGroup.Text>
          <BsSearch />
        </InputGroup.Text>
      </InputGroup>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={4}>
            開始日期
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="date"
              onChange={(e) => setQueryStartDate(e.target.value)}
              className="mb-3"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={4}>
            結束日期
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="date"
              defaultValue={new Date()}
              onChange={(e) => setQueryEndDate(e.target.value)}
              className="mb-3"
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
export default SearchBar;
