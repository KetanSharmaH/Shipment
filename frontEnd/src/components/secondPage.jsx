/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "./navBar.jsx";
import Sidebar from "./sideBar.jsx";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";

function secondPage() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    SenderAddress: location.state.SenderAddress,
    SenderName: location.state.SenderName,
    SenderMobileNo: location.state.SenderMobileNo,
    ReceiverAddress: location.state.ReceiverAddress,
    ReceiverName: location.state.ReceiverName,
    ReceiverMobileNo: location.state.ReceiverMobileNo,
    TrackerID: location.state.TrackerID,
  });

  const [isEditable, setIsEditable] = useState({
    EditSenderAddress: false,
    EditSenderName: false,
    EditSenderMobileNo: false,
    EditReceiverAddress: false,
    EditReceiverName: false,
    EditReceiverMobileNo: false,
  });

  const toggleEditMode = (field) => {
    setIsEditable({ ...isEditable, [field]: !isEditable[field] });
  };

  const [showBarcode, setShowBarcode] = useState(false);

  const handleShowBarcode = () => setShowBarcode(true);
  const handleCloseBarcode = () => setShowBarcode(false);

  const barcodeRef = useRef();

  const handleDownloadBarcode = () => {
    html2canvas(barcodeRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "Barcode.png";
      link.click();
    });
  };

  const barcodeValue = formData.TrackerID; // Use only TrackerID for the barcode

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/Shipment_Details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.message) {
        alert("Data saved successfully!");
        handleShowBarcode();
      } else if (data.error) {
        alert("Error saving data: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(formData);

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col xs={12} md={2} className="bg-dark text-white vh-100 p-3">
            <Sidebar />
          </Col>
          <Col xs={12} md={5} className="p-4">
            <h4>Sender Details</h4>
            <Form>
              <Row className="align-items-center">
                <Col xs={10}>
                  <Form.Group controlId="SenderAddress">
                    <Form.Label>Sender Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.SenderAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          SenderAddress: e.target.value,
                        })
                      }
                      readOnly={!isEditable.EditSenderAddress}
                    />
                  </Form.Group>
                </Col>
                <Col xs={2} className="d-flex align-items-end">
                  <Button
                    variant="primary"
                    onClick={() => toggleEditMode("EditSenderAddress")}
                    className="w-100"
                  >
                    {isEditable.EditSenderAddress ? "Save" : "Edit"}
                  </Button>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col xs={10}>
                  <Form.Group controlId="SenderName">
                    <Form.Label>Sender Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.SenderName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          SenderName: e.target.value,
                        })
                      }
                      readOnly={!isEditable.EditSenderName}
                    />
                  </Form.Group>
                </Col>
                <Col xs={2} className="d-flex align-items-end">
                  <Button
                    variant="primary"
                    onClick={() => toggleEditMode("EditSenderName")}
                    className="w-100"
                  >
                    {isEditable.EditSenderName ? "Save" : "Edit"}
                  </Button>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col xs={10}>
                  <Form.Group controlId="SenderMobileNo">
                    <Form.Label>Sender Mobile No</Form.Label>
                    <Form.Control
                      type="number"
                      value={formData.SenderMobileNo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          SenderMobileNo: e.target.value,
                        })
                      }
                      readOnly={!isEditable.EditSenderMobileNo}
                    />
                  </Form.Group>
                </Col>
                <Col xs={2} className="d-flex align-items-end">
                  <Button
                    variant="primary"
                    onClick={() => toggleEditMode("EditSenderMobileNo")}
                    className="w-100"
                  >
                    {isEditable.EditSenderMobileNo ? "Save" : "Edit"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs={12} md={5} className="p-4">
            <h4>Receiver Details</h4>
            <Form>
              <Row className="align-items-center">
                <Col xs={10}>
                  <Form.Group controlId="ReceiverAddress">
                    <Form.Label>Receiver Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.ReceiverAddress}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ReceiverAddress: e.target.value,
                        })
                      }
                      readOnly={!isEditable.EditReceiverAddress}
                    />
                  </Form.Group>
                </Col>
                <Col xs={2} className="d-flex align-items-end">
                  <Button
                    variant="primary"
                    onClick={() => toggleEditMode("EditReceiverAddress")}
                    className="w-100"
                  >
                    {isEditable.EditReceiverAddress ? "Save" : "Edit"}
                  </Button>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col xs={10}>
                  <Form.Group controlId="ReceiverName">
                    <Form.Label>Receiver Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.ReceiverName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ReceiverName: e.target.value,
                        })
                      }
                      readOnly={!isEditable.EditReceiverName}
                    />
                  </Form.Group>
                </Col>
                <Col xs={2} className="d-flex align-items-end">
                  <Button
                    variant="primary"
                    onClick={() => toggleEditMode("EditReceiverName")}
                    className="w-100"
                  >
                    {isEditable.EditReceiverName ? "Save" : "Edit"}
                  </Button>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col xs={10}>
                  <Form.Group controlId="ReceiverMobileNo">
                    <Form.Label>Receiver Mobile No</Form.Label>
                    <Form.Control
                      type="number"
                      value={formData.ReceiverMobileNo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ReceiverMobileNo: e.target.value,
                        })
                      }
                      readOnly={!isEditable.EditReceiverMobileNo}
                    />
                  </Form.Group>
                </Col>
                <Col xs={2} className="d-flex align-items-end">
                  <Button
                    variant="primary"
                    onClick={() => toggleEditMode("EditReceiverMobileNo")}
                    className="w-100"
                  >
                    {isEditable.EditReceiverMobileNo ? "Save" : "Edit"}
                  </Button>
                </Col>
              </Row>
              <Form.Group controlId="TrackerID" className="mt-4">
                <Form.Label>Tracker ID</Form.Label>
                <Form.Control type="text" value={formData.TrackerID} readOnly />
              </Form.Group>
              <Form.Group className="mt-4">
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShowBarcode();
                    handleSubmit();
                  }}
                >
                  Submit and Show Barcode
                </Button>
              </Form.Group>
              <Modal show={showBarcode} onHide={handleCloseBarcode} centered>
                <Modal.Body>
                  <div
                    ref={barcodeRef}
                    style={{
                      height: "auto",
                      margin: "0 auto",
                      maxWidth: 256,
                      width: "100%",
                    }}
                  >
                    <Barcode
                      value={barcodeValue}
                      width={2}
                      height={100}
                      displayValue={false}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseBarcode}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleDownloadBarcode}>
                    Download Barcode
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default secondPage;
