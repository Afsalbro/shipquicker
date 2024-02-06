import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { CardHeader } from '@mui/material';


export default function kyc() {
  return (
    <div className="container mt-3" style={{marginTop:'7%',marginBottom:'5%'}}>    
      <Card style={{padding:'40px'}}>
        <Card.Header style={{fontSize:'x-large'}}>Profile and Company Details</Card.Header>
        <Card.Body>
          <Card.Title>Company Basic Info</Card.Title>
          <Form onSubmit={()=>{}}>
          <Row style={{marginBottom:'1%'}}>
              <Col md={4}>
                <Form.Group controlId="formCompanyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text"  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCompanyURL">
                  <Form.Label>Website URL</Form.Label>
                  <Form.Control type="text"  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCompanyLogo">
                  <Form.Label>Upload Your Company Logo</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{marginBottom:'1%'}}>
              <Col md={4}>
                <Form.Group controlId="formCompanyName">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text"  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCompanyURL">
                  <Form.Label>Contact No.</Form.Label>
                  <Form.Control type="text"  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCompanyLogo">
                  <Form.Label>Upload Your GST</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{marginBottom:'1%'}}>
              <Col md={4}>
                <Form.Group controlId="formCompanyName">
                  <Form.Label>Pan Number</Form.Label>
                  <Form.Control type="text"  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCompanyURL">
                  <Form.Label>GST Number</Form.Label>
                  <Form.Control type="text"  />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{marginBottom:'1%'}}>
              <Col md={8}>
                <Form.Group controlId="formCompanyName">
                  <Form.Label>Company Address</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{marginBottom:'1%'}}>
              <Col md={4}>
                <Form.Group controlId="formCompanyName">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text"  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCompanyURL">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text"  />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{marginBottom:'1%'}}>
              <Col md={4}>
                <Form.Group controlId="formCompanyName">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control type="text"  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}
