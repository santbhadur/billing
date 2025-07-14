import React from 'react';
import Form from 'react-bootstrap/Form';
import  Container  from 'react-bootstrap';

export default function contactDetails() {
  return (
    <div className='d-flex justify-content-center flex-column' style={{
                
                 backgroundColor: '#f8f9fa',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                borderRadius: '8px',}}>
                    <h1>Contact Details</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Number" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <button type="button" className="btn btn-primary mt-2" >
                                  Save
                                </button>
      </Form.Group>
      
    </Form>
    </div>
  );
}
