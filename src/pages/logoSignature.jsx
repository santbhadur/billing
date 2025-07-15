import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function LogoSignature() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('logo', document.getElementById('logoUpload').files[0]);
    formData.append('signature', document.getElementById('signatureUpload').files[0]);

    try {
      const response = await fetch('http://localhost:8000/upload-logo-signature', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (response.ok) {
        alert('✅ Files uploaded successfully!');
        console.log(result);
      } else {
        alert('❌ Upload failed: ' + result.error);
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('❌ Failed to upload files');
    }
  };

  return (
    <Container style={{ maxWidth: '600px', marginTop: '30px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h5 className="text-center mb-4">Logo and Signature</h5>
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="logoUpload">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Add Logo
          </Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="signatureUpload">
          <Form.Label style={{ fontSize: '16px', fontWeight: 'bold' }}>
            Add Signature
          </Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button variant="primary" className="w-100" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
}
