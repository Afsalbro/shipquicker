import React, { useState, useEffect } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

export default function Recharge() {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Initialize Razorpay once during component mounting
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    // Perform validations
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const options = {
      key: "rzp_live_H7HUdQ7Joiolyw",
      amount: 1 * 100, 
      currency: "INR",
      name: "ShipQuickr",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      // order_id: "order_IluGWxBm9U8zJ8",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="container mt-3" style={{ marginTop: "5%", paddingLeft: "10%" }}>
      <Card style={{ padding: "40px", marginBottom: "5%" }}>
        <Card.Body>
          <Card.Title style={{fontSize:"20px"}}>Recharge the Wallet</Card.Title>
          <Form>
            <Row style={{ marginBottom: "1%" }}>
              <Col md={4}>
                <Form.Group controlId="formCompanyName">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{borderRadius:"0px"}}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" onClick={handlePayment} style={{padding:"5px 10px"}}>
              Pay with RazorPay
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
