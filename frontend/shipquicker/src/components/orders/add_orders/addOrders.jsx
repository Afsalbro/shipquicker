import {
  Box,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Card,
  Form,
  Button,
  Row,
  Col,
  Collapse,
  InputGroup,
} from "react-bootstrap";

const steps = [
  {
    label: "Buyer Details",
    component: BuyerDetailsForm,
  },
  {
    label: "Pickup Details",
    component: PickupDetailsForm,
  },
  {
    label: "Order Details",
    component: OrderDetailsForm,
  },
  {
    label: "Package Details",
    component: PackageDetailsForm,
  },
];

function BuyerDetailsForm({ onNext }) {
  return (
    <>
      <Row style={{ marginBottom: "1%" }}>
        <Card.Header style={{ fontSize: "x-large" }}>
          Add Buyer's Details
        </Card.Header>
        <Card.Title>
          To whom is the order being delivered? (Buyer's Info)
        </Card.Title>
        <Col md={4}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formCompanyURL">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formCompanyLogo">
            <Form.Label>Email Id (Optional)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Row style={{ marginBottom: "1%" }}>
        <Col md={4}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Alternate Mobile Number (Optional)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formCompanyURL">
            <Form.Label>Buyer's Company Name (Optional)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="formCompanyLogo">
            <Form.Label>Buyer's GSTIN (Optional)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Card.Title style={{ marginTop: "5%" }}>
        Where is the order being delivered to? (Buyer's Address)
      </Card.Title>
      <Row style={{ marginBottom: "1%" }}>
        <Col md={6}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Complete Address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formCompanyURL">
            <Form.Label>Landmark (Optional)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Row style={{ marginBottom: "1%" }}>
        <Col md={3}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" value="India" disabled />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" onClick={onNext}>
        Next
      </Button>
    </>
  );
}

function PickupDetailsForm({ onNext, onBack }) {
  return (
    <>
      <Row style={{ marginBottom: "1%" }}>
        <Card.Header style={{ fontSize: "x-large", marginBottom: "1%" }}>
          Pickup Address
        </Card.Header>
        <Col md={6}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>
              Where is the order being sent from? (Your Address)
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Search your pick up address here by nickname or phone number"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ marginBottom: "1%" }}>
        <Col md={6}>
          <Form.Group controlId="formCompanyName">
            <h6>Recently Used Addresses</h6>
            <p>No Recent Found!</p>
          </Form.Group>
        </Col>
      </Row>

      <Row style={{ marginBottom: "1%" }}>
        <Col md={4}>
          <Card bg="secondary">
            <Card.Body>
              <Card.Title>Primary Address</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Picker_pickup_1205621
              </Card.Subtitle>
              <Card.Text className="mb-2 text-muted">
                1C/118 Sector 1 Vardan khand Gomatinagar extension...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="mb-2 text-muted">
              <a href="">Edit Address</a>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4}>
          <Card bg="secondary">
            <Card.Body>
              <Card.Title>Primary Address</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Picker_pickup_1205621
              </Card.Subtitle>
              <Card.Text className="mb-2 text-muted">
                1C/118 Sector 1 Vardan khand Gomatinagar extension...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="mb-2 text-muted">
              <a href="">Edit Address</a>
            </Card.Footer>
          </Card>
        </Col>

        <Col md={4}>
          <Card bg="secondary">
            <Card.Body>
              <Card.Title>Primary Address</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Picker_pickup_1205621
              </Card.Subtitle>
              <Card.Text className="mb-2 text-muted">
                1C/118 Sector 1 Vardan khand Gomatinagar extension...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="mb-2 text-muted">
              <a href="">Edit Address</a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="primary" onClick={onNext}>
          Next
        </Button>
      </Row>
    </>
  );
}

function OrderDetailsForm({ onNext, onBack }) {
  return (
    <>
      <Row style={{ marginBottom: "1%" }}>
        <Card.Header style={{ fontSize: "x-large", marginBottom: "1%" }}>
          Order Details
        </Card.Header>
        <Col md={4}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Order ID (Auto Generated)</Form.Label>
            <Form.Control type="text" value="3232323" />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Order Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Control as="select">
              <option>Custom</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Order Tag (Optional)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Reseller's Name (Optional)</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>

      <Card.Title>Product Details</Card.Title>
      <Row>
        <Col md={4}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Product 1 Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Unit Price</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group controlId="formCompanyName">
            <Form.Label>Product Category</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>

        <Col md={1} style={{ marginTop: "3%" }}>
          <i class="bi bi-trash3"></i>
        </Col>
      </Row>

      <Card.Title>Payment Details</Card.Title>
      <Card.Header>
        Select mode of payment that your buyer has chosen for the order
      </Card.Header>
      <Row style={{ marginTop: "1%" }}>
        <Col md={6}>
          <Form.Group controlId="formOrderType">
            <Row>
              <Col md={6}>
                <Form.Check
                  inline
                  label="Cash On Delivery"
                  name="orderType"
                  type="radio"
                  id={`inline-1-1`}
                />
              </Col>
              <Col md={6}>
                <Form.Check
                  inline
                  label="Prepaid"
                  name="orderType"
                  type="radio"
                  id={`inline-1-2`}
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>

      <Card.Title>Shipping Mode</Card.Title>
      <Card.Header>Select mode of shipping</Card.Header>
      <Row style={{ marginTop: "1%" }}>
        <Col md={6}>
          <Form.Group controlId="formOrderType">
            <Row>
              <Col md={4}>
                <Form.Check
                  inline
                  label="Express"
                  name="orderType"
                  type="radio"
                  id={`inline-1-1`}
                />
              </Col>
              <Col md={4}>
                <Form.Check
                  inline
                  label="Surface"
                  name="orderType"
                  type="radio"
                  id={`inline-1-2`}
                />
              </Col>

              <Col md={4}>
                <Form.Check
                  inline
                  label="None"
                  name="orderType"
                  type="radio"
                  id={`inline-1-3`}
                />
              </Col>
            </Row>
          </Form.Group>
        </Col>
      </Row>

      <Row style={{ marginTop: "5%" }}>
        <Col md={12}>
          <Row>
            <Col md={6}>Sub-total for Product</Col>
            <Col md={6} style={{ textAlign: "end" }}>
              ₹ 0
            </Col>
          </Row>

          <Row>
            <Col md={6}>Other Charges</Col>
            <Col md={6} style={{ textAlign: "end" }}>
              ₹ 0
            </Col>
          </Row>

          <Row style={{ marginTop: "1%" }}>
            <Col md={6} style={{ fontWeight: "bold" }}>
              Total Order Value
            </Col>
            <Col md={6} style={{ fontWeight: "bold", textAlign: "end" }}>
              ₹ 0
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button variant="primary" onClick={onNext}>
          Next
        </Button>
      </Row>
    </>
  );
}

function PackageDetailsForm({ onNext, onBack }) {
  return (
    <>
      <Row style={{ marginBottom: "1%" }}>
        <Card.Header style={{ fontSize: "x-large", marginBottom: "1%" }}>
          Package Details
        </Card.Header>
      </Row>
      <Row>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Dead Weight</Form.Label>
            <Form.Control type="text" placeholder="0.00" />
            <Form.Text className="text-muted">
              Max. 3 digits after decimal place. The minimum chargeable weight
              is 0.50 Kg.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Card.Title style={{ marginBottom: "2%" }}>Volumetric Weight</Card.Title>
      <Card.Title style={{ marginBottom: "1%" }}>
        Enter packages dimensions to calculate Volumetric Weight
      </Card.Title>
      <Row>
        <Col md={6}>
          <Row>
            <Col md={4}>
              <Form.Control type="text" placeholder="0.00" />
            </Col>
            <Col md={4}>
              <Form.Control type="text" placeholder="0.00" />
            </Col>
            <Col md={4}>
              <Form.Control type="text" placeholder="0.00" />
            </Col>
          </Row>
          <Form.Text className="text-muted">
            Note: Dimensions should be in centimeters only & values should be
            greater than 0.50 cm.
          </Form.Text>
        </Col>
        {/* OR */}
        <Col md={1}>OR</Col>
        <Col md={5}>
          {/* <Form.Label>Select from your saved packages to autofill package dimensions</Form.Label> */}
          <Row>
            <Col>
              <Form.Control as="select">
                <option>Select Custom Package</option>
              </Form.Control>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Col md={12}>
          <Row>
            <Col md={6}>Volumetric Weight</Col>
            <Col md={6}>0.00 Kg</Col>
          </Row>

          <Row style={{ marginTop: "1%" }}>
            <Col md={6} style={{ fontWeight: "bold" }}>
              Applicable Weight
            </Col>
            <Col md={6} style={{ fontWeight: "bold" }}>
              0.00 Kg
            </Col>
            <Form.Text className="text-muted">
              *Applicable weight is the heavier among the two weights that is
              Dead Weight V/s the Volumetric Weight, basis on which freight
              charges are calculated. <br />
              *Final chargeable weight will be based on the weight slab of the
              courier selected before shipping
            </Form.Text>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Button
          variant="secondary"
          onClick={onBack}
          style={{ marginRight: "1rem" }}
        >
          Back
        </Button>
        <Button variant="primary" type="submit">
          Finish
        </Button>
      </Row>
    </>
  );
}

export default function AddOrders() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getCurrentStepComponent = () => {
    const StepComponent = steps[activeStep].component;
    return <StepComponent onNext={handleNext} onBack={handleBack} />;
  };

  return (
    <div className="container mt-3" style={{ marginTop: "7%" }}>
      <Card>
        <Card.Body>
          <Form onSubmit={() => {}}>
            <Row>
              <Col md={2}>
                <Box sx={{ maxWidth: 500 }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Col>
              <Col md={10}>{getCurrentStepComponent()}</Col>
            </Row>
            {/* <Row style={{ textAlign: "end", marginRight: "0px" }}>
              <Button variant="primary" type="submit">
                Next
              </Button>
            </Row> */}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
