import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Business() {
  const [formData, setFormData] = useState({
  businessName: '',
  shopAddress: '',
  pinCode: '',
  city: '',
  state: '',
  gstNumber: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSave = async () => {
  try {
    const response = await fetch('http://localhost:8000/business', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert('✅ Business details saved!');
      setFormData({
        businessName: '',
        shopAddress: '',
        pinCode: '',
        city: '',
        state: '',
        gstNumber: '',
      });
    } else {
      alert('❌ ' + result.error);
    }
  } catch (error) {
    console.error('Save error:', error);
    alert('❌ Failed to save business details');
  }
};


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
          <Form.Control
  name="businessName"
  value={formData.businessName}
  onChange={handleChange}
  type="text"
  size="sm"
  placeholder="Enter Business Name"
/>

        </Form.Group>

        <Form.Group className="mb-3" controlId="shopAddress">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Shop Address
          </Form.Label>
          <Form.Control
  name="shopAddress"
  value={formData.shopAddress}
  onChange={handleChange}
  type="text"
  size="sm"
  placeholder="Enter Business Name"
/>

        </Form.Group>

        <Form.Group className="mb-3" controlId="pinCode">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Pin Code
          </Form.Label>
          <Form.Control
  name="pinCode"
  value={formData.pinCode}
  onChange={handleChange}
  type="text"
  size="sm"
  placeholder="Enter Business Name"
/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="city">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            City
          </Form.Label>
          <Form.Control
  name="city"
  value={formData.city}
  onChange={handleChange}
  type="text"
  size="sm"
  placeholder="Enter Business Name"
/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="state">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            State
          </Form.Label>
          <Form.Control
  name="state"
  value={formData.state}
  onChange={handleChange}
  type="text"
  size="sm"
  placeholder="Enter Business Name"
/>
   
        </Form.Group>

        <Form.Group className="mb-3" controlId="gstNumber">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            GST Number
          </Form.Label>
          <Form.Control
  name="gstNumber"
  value={formData.gstNumber}
  onChange={handleChange}
  type="text"
  size="sm"
  placeholder="Enter Business Name"
/>
        </Form.Group>

        <Form.Group className="mb-0">
          <Button type="button" onClick={handleSave}>
  Save
</Button>

        </Form.Group>
      </Form>
    </Container>
  );
}
