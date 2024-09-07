/* eslint-disable react-hooks/rules-of-hooks */
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stepper, Step } from "react-form-stepper";

function formFill() {
  const generateTrackerID = () => {
    return `${Math.floor(Math.random() * 1000000)}`;
  };

  const [SenderDetail, setSenderDetail] = useState({
    SenderAddress: "",
    SenderName: "",
    SenderMobileNo: "",
  });

  const [ReceiverDetail, setReceiverDetail] = useState({
    ReceiverAddress: "",
    ReceiverName: "",
    ReceiverMobileNo: "",
  });

  const [TrackerID] = useState(generateTrackerID());

  const navigate = useNavigate();

  const steps = [
    { label: "Sender" },
    { label: "Receiver" },
    { label: "Confirmation" },
  ];

  const stepperColors = {
    activeBgColor: "#4caf50",
    completedBgColor: "#3f51b5",
    inactiveBgColor: "#9e9e9e",
  };

  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      setCompletedSteps([...completedSteps, activeStep]);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleSubmit = () => {
    navigate("/Second_Page", {
      state: {
        SenderAddress: SenderDetail.SenderAddress,
        SenderName: SenderDetail.SenderName,
        SenderMobileNo: SenderDetail.SenderMobileNo,
        ReceiverAddress: ReceiverDetail.ReceiverAddress,
        ReceiverName: ReceiverDetail.ReceiverName,
        ReceiverMobileNo: ReceiverDetail.ReceiverMobileNo,
        TrackerID: TrackerID,
      },
    });
  };

  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col xs={12}>
          <Stepper
            activeStep={activeStep}
            styleConfig={{
              activeBgColor: stepperColors.activeBgColor,
              completedBgColor: stepperColors.completedBgColor,
              inactiveBgColor: stepperColors.inactiveBgColor,
            }}
          >
            {steps.map((step, index) => (
              <Step
                key={index}
                label={step.label}
                active={index === activeStep}
                completed={completedSteps.includes(index)}
              />
            ))}
          </Stepper>
        </Col>
      </Row>

      {activeStep === 0 && (
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Form>
              <Form.Group className="mb-3 mt-4" controlId="SenderAddress">
                <Form.Label>Sender Address</Form.Label>
                <Form.Control
                  type="address"
                  placeholder="Enter Sender Address"
                  value={SenderDetail.SenderAddress}
                  onChange={(e) =>
                    setSenderDetail({
                      ...SenderDetail,
                      SenderAddress: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-4" controlId="SenderName">
                <Form.Label>Sender Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Sender Name"
                  value={SenderDetail.SenderName}
                  onChange={(e) =>
                    setSenderDetail({
                      ...SenderDetail,
                      SenderName: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-4" controlId="SenderMobileNo">
                <Form.Label>Sender Mobile Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Sender Mobile Number"
                  value={SenderDetail.SenderMobileNo}
                  onChange={(e) =>
                    setSenderDetail({
                      ...SenderDetail,
                      SenderMobileNo: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      )}

      {activeStep === 1 && (
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="ReceiverAddress">
                <Form.Label>Receiver Address</Form.Label>
                <Form.Control
                  type="address"
                  placeholder="Enter Receiver Address"
                  value={ReceiverDetail.ReceiverAddress}
                  onChange={(e) =>
                    setReceiverDetail({
                      ...ReceiverDetail,
                      ReceiverAddress: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ReceiverName">
                <Form.Label>Receiver Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Receiver Name"
                  value={ReceiverDetail.ReceiverName}
                  onChange={(e) =>
                    setReceiverDetail({
                      ...ReceiverDetail,
                      ReceiverName: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="ReceiverMobileNo">
                <Form.Label>Receiver Mobile Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Receiver Mobile Number"
                  value={ReceiverDetail.ReceiverMobileNo}
                  onChange={(e) =>
                    setReceiverDetail({
                      ...ReceiverDetail,
                      ReceiverMobileNo: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      )}

      {activeStep === 2 && (
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <h4 className="mb-4">Confirm Details</h4>
            <ul>
              <li>Sender Name: {SenderDetail.SenderName}</li>
              <li>Sender Address: {SenderDetail.SenderAddress}</li>
              <li>Sender Mobile No: {SenderDetail.SenderMobileNo}</li>
              <li>Receiver Name: {ReceiverDetail.ReceiverName}</li>
              <li>Receiver Address: {ReceiverDetail.ReceiverAddress}</li>
              <li>Receiver Mobile No: {ReceiverDetail.ReceiverMobileNo}</li>
            </ul>
          </Col>
        </Row>
      )}

      <Row className="align-items-center justify-content:center">
        <Col xs={4} sm={3} className="text-start">
          <Button
            variant="secondary"
            className="mt-4 w-100"
            onClick={handlePrevious}
            disabled={activeStep === 0}
          >
            Previous
          </Button>
        </Col>
        <Col xs={4} sm={3} className="text-center">
          {activeStep < steps.length - 1 ? (
            <Button
              variant="primary"
              className="mt-4 w-100"
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="success"
              className="mt-4 w-100"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </Col>
      </Row>

      <Row className="justify-content-end mt-4">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="TrackerID">
            <Form.Label>Tracker ID</Form.Label>
            <Form.Control type="text" value={TrackerID} readOnly />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default formFill;
