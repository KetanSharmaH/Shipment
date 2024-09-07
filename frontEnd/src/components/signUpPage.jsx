import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMismatch(false);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMismatch(event.target.value !== password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        await axios.post("http://localhost:3000/signup", { email, password });
        const response = await axios.post("http://localhost:3000/login", {
          email,
          password,
        });
        localStorage.setItem("token", response.data.token);
        navigate("/front_page");
      } catch (err) {
        console.error(err.response?.data?.error || "An error occurred");
      }
    } else {
      setPasswordMismatch(true);
    }
  };

  return (
    <section
      id="SignUp"
      className="d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Row className="w-100">
          <Col
            xs={12}
            sm={10}
            md={8}
            lg={6}
            xl={5}
            className="signup-form bg-white p-4 rounded border border-dark mx-auto"
            style={{ boxSizing: "border-box" }}
          >
            <h3 className="text-center mb-4">Sign Up</h3>
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
                  onChange={handlePasswordChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                  isInvalid={passwordMismatch}
                />
                {passwordMismatch && (
                  <Form.Control.Feedback type="invalid">
                    Passwords do not match!
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <div className="d-grid gap-2 mt-4">
                <Button variant="primary" type="submit" size="lg">
                  Sign Up
                </Button>
              </div>

              <div className="text-center mb-3">
                <p>
                  Already have an account? <a href="/">Login here</a>
                </p>
              </div>

              <hr />

              <div className="d-grid gap-2">
                <Button variant="outline-primary" className="mb-2" size="lg">
                  Sign Up with Facebook
                </Button>
                <Button variant="outline-danger" size="lg">
                  Sign Up with Google
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Signup;
