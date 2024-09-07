/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "./navBar.jsx";
import Sidebar from "./sideBar.jsx";

function orders() {
  const [shipmentDetails, setShipmentDetails] = useState([]);

  useEffect(() => {
    fetchShipmentDetails();
  }, []);

  const fetchShipmentDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/Shipment_Details"
      );
      setShipmentDetails(response.data);
    } catch (error) {
      console.error("Error fetching shipment details:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col xs={12} md={2} className="bg-dark text-white vh-100 p-3">
            <Sidebar />
          </Col>
          <Col xs={12} md={10} className="p-4">
            <Container>
              <Row>
                {shipmentDetails.map((detail, index) => (
                  <Col xs={12} sm={6} md={4} key={index}>
                    <Card className="mb-3">
                      <Card.Body>
                        <Card.Title>Tracker ID: {detail.TrackerID}</Card.Title>
                        <Card.Text>
                          <strong>Sender Name:</strong> {detail.SenderName}
                          <br />
                          <strong>Sender Address:</strong>{" "}
                          {detail.SenderAddress}
                          <br />
                          <strong>Sender Mobile No:</strong>{" "}
                          {detail.SenderMobileNo}
                          <br />
                          <strong>Receiver Name:</strong> {detail.ReceiverName}
                          <br />
                          <strong>Receiver Address:</strong>{" "}
                          {detail.ReceiverAddress}
                          <br />
                          <strong>Receiver Mobile No:</strong>{" "}
                          {detail.ReceiverMobileNo}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default orders;
