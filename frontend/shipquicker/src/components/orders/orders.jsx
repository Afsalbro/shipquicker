import React, { useState, useMemo } from "react";
// import { Button } from "@mui/material";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import ShipNowModal from "./add_orders/shipNowModal";
import axios from "axios";

const Export = ({ onExport }) => (
  <button
    onClick={onExport}
    className="btn btn-primary bi bi-download"
    data-toggle="tooltip"
    data-placement="top"
    title="Export as CSV"
  ></button>
);

const downloadCSV = (data) => {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    Object.keys(data[0])
      .map((key) => key)
      .join(",") +
    "\n" +
    data.map((item) => Object.values(item).join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "export.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = async () => {
    try {
      const response = await axios.post('https://ship.xpressbees.com/api/users/franchise_login', {
        email: "info@shipquickr.com",
        password: "Sysconic@123"
      });
      // console.log(response);
      if (response.status === 200) {
        const data = response.data;
        const dataString = JSON.stringify(data);
      localStorage.setItem("xpressbeesToken", dataString);
        setIsModalOpen(true);
      } else {
        console.error("Failed to fetch token from Xpressbees API");
      }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const ActionButton = () => (
    <Button className="btn btn-primary" onClick={handleOpenModal}>
      Ship Now
    </Button>
  );

  const columns = [
    {
      name: "Order Details",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Customer details",
      selector: (row) => row.customerDetails,
      sortable: true,
    },
    {
      name: "Package Details",
      selector: (row) => row.packageDetails,
      sortable: true,
    },
    {
      name: "Payment",
      selector: (row) => row.payment,
      sortable: true,
    },
    {
      name: "Pickup Address",
      selector: (row) => row.pickupAddress,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => <ActionButton  onClick={() => handleOpenModal()} />,
      // sortable: true,
    },
  ];

  const data = [
    {
      title: "Order 001",
      customerDetails: "Afsal",
      packageDetails: "Standard Package",
      payment: "$50",
      pickupAddress: "123 Main St, Cityville",
      status: "Pending",
      action: "Edit",
    },
    {
      title: "Order 002",
      customerDetails: "Asmi",
      packageDetails: "Premium Package",
      payment: "$100",
      pickupAddress: "456 Elm St, Townsville",
      status: "Delivered",
      action: "Delete",
    },
  ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = data.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <Row>
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Filter by Order Details"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          {/* <button onClick={handleClear} className="btn btn-secondary">
          Clear Filter
        </button> */}
        </Col>
        <Col md={4}>
          <Link to="/add_orders">
            <Button className="btn btn-primary">Add Orders</Button>
          </Link>
        </Col>
      </Row>
    );
  }, [filterText, resetPaginationToggle]);

  const actionsMemo = useMemo(
    () => <Export onExport={() => downloadCSV(filteredItems)} />,
    [filteredItems]
  );

  return (
    <div className="container mt-3" style={{ marginTop: "7%" }}>
      <Card>
        {/* <Card.Header style={{ fontSize: "x-large" }}>Orders</Card.Header> */}
        <Card.Body>
          <DataTable
            title="Orders List"
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            selectableRows
            persistTableHead
            actions={actionsMemo}
          />
          <ShipNowModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Orders;
