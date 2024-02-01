import React, { useState, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import axios from "axios";
import "./style.css";

const ShipNowModal = ({ isOpen, onClose }) => {
  const [chargesData, setChargesData] = useState([]);

  useEffect(() => {
    const fetchChargesData = async () => {
      try {
        const tokenString = localStorage.getItem("xpressbeesToken");
        const token = JSON.parse(tokenString);
        const tokenValue = token.data;

        const response = await axios.post(
          "https://ship.xpressbees.com/api/franchise/shipments/calculate_pricing",
          {
            order_type_user: "ecom",
            origin: "122002",
            destination: "122006",
            weight: "0.5",
            length: "10",
            height: "10",
            breadth: "10",
            cod_amount: "23",
            cod: "no",
          },
          {
            headers: {
              Authorization: `Bearer ${tokenValue}`,
            },
          }
        );
        setChargesData(response.data.message);
      } catch (error) {
        console.error("Error fetching charges data:", error);
      }
    };

    if (isOpen) {
      fetchChargesData();
    }
  }, [isOpen]);

  const calculateTotalWithTax = (totalPrice) => {
    // Calculate 18% tax
    const tax = totalPrice * 0.18;
    // Add tax to the total price
    return totalPrice + tax;
  };

  return (
    <Modal
      size="lg"
      animation={true}
      transition={false}
      style={{ opacity: 1 }}
      show={isOpen}
      onHide={onClose}
    >
      <Modal.Header>
        <Modal.Title>Ship Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Courier Charges</th>
              <th>COD Charges</th>
              <th>Total Price (incl. Tax)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {chargesData?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>₹ {item.courier_charges}</td>
                <td>{item.cod_charges}</td>
                <td>₹ {calculateTotalWithTax(item.total_price)}</td>
                <td>
                  <Button className="btn btn-primary">Ship Now</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal> 
  );
};

export default ShipNowModal;
