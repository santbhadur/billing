import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function TermsAndConditions() {
  const [terms, setTerms] = useState('');

  const handleSave = async () => {
  try {
    const response = await fetch('https://frontbackend-xi.vercel.app/terms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: terms }),
    });

    const result = await response.json();

    if (response.ok) {
      alert('✅ Terms and Conditions saved!');
      setTerms('');
      console.log('Saved:', result);
    } else {
      alert('❌ ' + result.error);
    }
  } catch (err) {
    console.error('Save error:', err);
    alert('❌ Failed to save terms');
  }
  
};


  return (
    <Container
      className="mt-4"
      style={{
        maxWidth: '700px',
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    >
      <h5 className="text-center mb-4">Terms and Conditions</h5>
      
      <Form>
        <Form.Group controlId="termsTextArea" className="mb-3">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Enter Terms and Conditions
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            placeholder="Write your terms and conditions here..."
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Form>
    </Container>
  );
}
