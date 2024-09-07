/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navBar.jsx";
import Sidebar from "./sideBar.jsx";
import { Container, Row, Col } from "react-bootstrap";
import FormFill from "./formFill.jsx";
import axios from "axios";

function FrontPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/");
        } else {
          await axios.get("http://localhost:3000/dashboard", {
            headers: { Authorization: `Bearer ${token}` },
          });
        }
      } catch (err) {
        navigate("/");
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col md={2} className="bg-dark text-white vh-100 p-3">
            <Sidebar />
          </Col>
          <Col md={10} className="p-4">
            <FormFill />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FrontPage;
