import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Orders");
  };

  return (
    <>
      <Nav
        className="flex-column text-center text-md-start"
        style={{ height: "100%", paddingTop: "20px" }}
      >
        <Nav.Link href="/" className="text-white">
          Dashboard
        </Nav.Link>
        <Nav.Link href="/" className="text-white">
          Profile
        </Nav.Link>
        <Nav.Link className="text-white" onClick={handleClick}>
          Orders
        </Nav.Link>
        <Nav.Link href="/" className="text-white">
          Settings
        </Nav.Link>
        <Nav.Link href="/" className="text-white">
          Logout
        </Nav.Link>
      </Nav>
    </>
  );
}

export default Sidebar;
