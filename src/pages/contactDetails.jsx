import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function ContactDetails() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSave = async () => {
    if (!mobileNumber || !email) {
      alert('Please fill all fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/contact-details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber, email }),
      });
      const data = await res.json();

      if (res.ok) {
        alert('Contact details saved successfully!');
        setMobileNumber('');
        setEmail('');
      } else {
        setMessage(data.error || 'Failed to save');
      }
    } catch (err) {
      setMessage('Error connecting to server');
    }
  };

  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{
        backgroundColor: '#f8f9fa',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      <h1>Contact Details</h1>
      <Form>
        <Form.Group className="mb-3" controlId="mobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <button type="button" className="btn btn-primary mt-2" onClick={handleSave}>
          Save
        </button>
      </Form>
      {message && <p style={{ marginTop: '15px' }}>{message}</p>}
    </div>
  );
}
