import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const dashboardBoxStyle = {
  height: '200px',
  background: '#adb5bd',
  textAlign: 'center',
  color: '#e9ecef',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  fontSize: '1.2rem',
  fontWeight: 'bold'
};

export default function Home() {
  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col md={6} lg={4} className="mb-3">
          <div style={dashboardBoxStyle}>Total Expense</div>
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <div style={dashboardBoxStyle}>Total Income</div>
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <div style={dashboardBoxStyle}>Profit</div>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={4} className="mb-3">
          <div style={dashboardBoxStyle}>Total Invoices</div>
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <div style={dashboardBoxStyle}>Clients</div>
        </Col>
        <Col md={6} lg={4} className="mb-3">
          <div style={dashboardBoxStyle}>Pending Payments</div>
        </Col>
      </Row>
    </Container>
  );
}
