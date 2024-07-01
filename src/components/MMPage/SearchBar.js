import { useContext } from "react";
//context
import InfoContext from "../../context/InfoContext";
//react-bootstrap
import { Form, InputGroup, Row, Col } from "react-bootstrap";
//icons
import { BsSearch } from "react-icons/bs";

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
              asp-format="{0:yyyy-MM-dd}"
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
              asp-format="{0:yyyy-MM-dd}"
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
