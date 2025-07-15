import React from "react";
import { Link } from "react-router-dom";

const LeftContainer = () => {
    return (
        <div
            className="container"
            style={{
                width: '200px',
                height: '400px',
                backgroundColor: '#f8f9fa',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '0px',
                borderRadius: '8px',
                margin: '0px',
                fontFamily: 'Roboto, sans-serif'
            }}
        >
            <div style={{ marginBottom: '15px' }}>
                <Link to="/contactDetails" style={{ textDecoration: 'none', color: '#000' }}>
                    <strong>Contact Details</strong>
                </Link>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <Link to="/business" style={{ textDecoration: 'none', color: '#000' }}>
                    <strong>Business Details</strong>
                </Link>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <Link to="/LogoSignature" style={{ textDecoration: 'none', color: '#000' }}>
                    <strong>Logo and Signature</strong>
                </Link>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <Link to="/Teams" style={{ textDecoration: 'none', color: '#000' }}>
                    <strong>Teams and Conditions</strong>
                </Link>
            </div>
        </div>
    );
};

export default LeftContainer;
