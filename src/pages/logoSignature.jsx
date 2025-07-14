import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function logoSignature() {
  return (
    <container style={{ width: '80%'}}>
        <h5 className="text-center" style={{ marginTop: '-30px' }}>
        Logo and Signature
      </h5>
      <Form>
        <Form.Group className="mb-3" controlId="businessName">
          <Form.Label style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Add Logo
          </Form.Label>
          <Form.Control type="file"   />
        </Form.Group>
        <Form.Group className="mb-3" controlId="businessName">
          <Form.Label style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Add Signature
          </Form.Label>
          <Form.Control type="file"   />
        </Form.Group>
    </Form>
    </container>
  );
}
