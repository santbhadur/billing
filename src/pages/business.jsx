import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Business() {
  return (
    <Container
      className="d-flex flex-column"
      style={{
        backgroundColor: '#f8f9fa',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '600px',
        position: 'absolute',
        top: '10%',
        left: '25%',
      }}
    >
      <h5 className="text-center" style={{ marginTop: '-30px' }}>
        Business Details
      </h5>

      <Form>
        <Form.Group className="mb-3" controlId="businessName">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Business Name
          </Form.Label>
          <Form.Control type="text" size="sm" placeholder="Enter Business Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="shopAddress">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Shop Address
          </Form.Label>
          <Form.Control type="text" size="sm" placeholder="Enter Shop Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pinCode">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Pin Code
          </Form.Label>
          <Form.Control type="number" size="sm" placeholder="Enter Pin Code" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="city">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            City
          </Form.Label>
          <Form.Control type="text" size="sm" placeholder="Enter your City" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="state">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            State
          </Form.Label>
          <Form.Control type="text" size="sm" placeholder="Enter your State" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="gstNumber">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            GST Number
          </Form.Label>
          <Form.Control type="text" size="sm" placeholder="Enter GST Number" />
        </Form.Group>

        <Form.Group className="mb-0">
          <Button
            type="button"
            size="sm"
            className="btn btn-primary w-100"
            style={{ marginTop: '20px' }}
          >
            Save
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
