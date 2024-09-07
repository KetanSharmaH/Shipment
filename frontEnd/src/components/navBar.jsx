import {
  Nav,
  Navbar,
  Container,
  Row,
  Col,
  NavDropdown,
  Dropdown,
  Form,
} from "react-bootstrap";
import UserProfile from "../assets/userProfile.png";
import { FaToggleOn } from "react-icons/fa";

function navBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs={6} md={4}>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          </Col>

          <Col xs={6} md={8} className="text-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex align-items-center">
                <Nav.Link href="#home">
                  <FaToggleOn size={"35px"} color="white" />
                </Nav.Link>
                <Nav.Link href="#search" className="d-none d-md-block">
                  <Form className="d-flex ms-2">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      style={{ height: "35px" }}
                    />
                  </Form>
                </Nav.Link>
                <Nav.Link href="#notification">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={"30px"}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                      fill="white"
                      stroke="black"
                    />
                  </svg>
                </Nav.Link>
                <NavDropdown
                  title={
                    <img
                      src={UserProfile}
                      height={"40px"}
                      width={"40px"}
                      alt="User Profile"
                      className="ms-2"
                    />
                  }
                  id="basic-nav-dropdown"
                  align="end"
                >
                  <Dropdown.Item href="#/action-1">Log Out</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default navBar;
