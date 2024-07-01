import React from "react";
import { Link } from "react-router-dom";
//picture
import notFound from "../assets/404.svg";
//react-bootstrap
import { Button, Card } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Card style={{ width: "18rem", backgroundColor: "#F4A261" }}>
        <Card.Body>
          <Card.Img variant="top" src={notFound} />
          <Card.Title>很抱歉!這個網頁不存在</Card.Title>
          <Card.Text>如有疑問，請聯繫資訊處分機號碼#3312</Card.Text>
          <Link to="/">
            <Button variant="info" className="w-100 mt-2">
              回到首頁
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ErrorPage;
