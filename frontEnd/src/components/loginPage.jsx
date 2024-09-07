import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/front_page");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  return (
    <section
      id="Login"
      className="d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ overflow: "hidden" }}
      >
        <Row className="w-100">
          <Col
            xs={12}
            sm={10}
            md={8}
            lg={6}
            xl={5}
            className="login-form bg-white p-4 rounded border border-dark mx-auto"
            style={{ boxSizing: "border-box" }}
          >
            <h3 className="text-center mb-4">Login</h3>
            {error && <p className="text-danger text-center">{error}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Text className="text-right d-block mb-3">
                <a href="#forgot-password">Forgot password?</a>
              </Form.Text>

              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="w-100 mb-3"
              >
                Login
              </Button>

              <div className="text-center mb-3">
                <p>
                  Dont have an account? <a href="/signup">Signup here</a>
                </p>
              </div>

              <hr />

              <Button
                variant="outline-primary"
                size="lg"
                className="w-100 mb-2"
              >
                Login with Facebook
              </Button>
              <Button variant="outline-danger" size="lg" className="w-100">
                Login with Google
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
