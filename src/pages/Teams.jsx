import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Teams() {
  return (
    <div>
      <container style={{ width: '80%'}}>
        <h5 className="text-center" style={{ marginTop: '-30px' }}>
        Teams And Condition
      </h5>
      <Form>
        <Form.Group className="mb-3" controlId="businessName">
          <Form.Label style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Teams and Condition
          </Form.Label>
          <Form.Control type="text"    />
        </Form.Group>
        
    </Form>
    </container>
    </div>
  );
}
