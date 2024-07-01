import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
//icons
import { TiPrinter } from "react-icons/ti";
//context
import { useAuth } from "../context/AuthContext";
//react-bootstrap
import { Form, Button, FormGroup, Alert } from "react-bootstrap";
//components
import Header from "../layouts/Header";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("帳號/密碼輸入錯誤!");
    }
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <div className="login">
        <div className="login-card">
          <TiPrinter
            className="mx-auto"
            style={{ color: "#FF6D28", fontSize: "80px" }}
          />
          <h5>Log In</h5>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label htmlFor="Email"></Form.Label>
              <Form.Control
                ref={emailRef}
                placeholder="Email"
                type="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Form.Label htmlFor="Password"></Form.Label>
              <Form.Control
                ref={passwordRef}
                placeholder="密碼"
                type="password"
                required
              />
            </FormGroup>
            <span style={{ fontSize: "14px", color: "#B5C0D0" }}>
              如有登入問題，請聯繫資訊處分機號碼#3312
            </span>
            <Button
              className="w-100 mt-2"
              type="submit"
              disabled={loading}
              color="primary"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
