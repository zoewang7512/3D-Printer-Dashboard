import { Card } from "react-bootstrap";
const BlockCard = ({ title, text, color }) => {
  return (
    <Card
      className="mb-2"
      style={{
        backgroundColor: "#000000",
        borderColor: "#333",
        color: "white",
        height: "115px",
      }}
    >
      <Card.Body style={{ paddingBottom: "0px" }}>
        <Card.Subtitle style={{ textAlign: "start" }}>{title}</Card.Subtitle>
        <Card.Text style={{ textAlign: "end", fontSize: "2rem", color: color }}>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default BlockCard;
