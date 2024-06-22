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
          <h2>Log In</h2>
          {error && <Alert color="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label for="Email"></Form.Label>
              <Form.Control
                //innerRef={emailRef}
                ref={emailRef}
                placeholder="enter your email"
                type="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Form.Label for="Password"></Form.Label>
              <Form.Control
                //innerRef={passwordRef}
                ref={passwordRef}
                placeholder="enter your password"
                type="password"
                required
              />
            </FormGroup>

            <Button
              className="w-100 mt-3"
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
