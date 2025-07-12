import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

// 🆕 Step 1: CSS for print
const printStyles = `
@media print {
    body * {
        visibility: hidden;
    }
    #print-section, #print-section * {
        visibility: visible;
    }
    #print-section {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }
}
`;

const AddIteam = () => {
    const [items, setItems] = useState([]);
    const [itemData, setItemData] = useState({
        itemName: "",
        price: "",
        quantity: "",
        unit: "",
        gst: ""
    });
    const [editIndex, setEditIndex] = useState(null);

    const printRef = useRef(); // 🆕 Ref to the printable section

    const handleChange = (e) => {
        setItemData({
            ...itemData,
            [e.target.name]: e.target.value
        });
    };

    const handleAddItem = () => {
        const { itemName, price, quantity, gst } = itemData;

        if (!itemName || !price || !quantity) {
            alert("Please fill required fields");
            return;
        }

        const baseAmount = parseFloat(price) * parseFloat(quantity);
        const gstRate = parseFloat(gst) || 0;
        const gstAmount = (baseAmount * gstRate) / 100;
        const amount = baseAmount + gstAmount;

        if (editIndex !== null) {
            const updatedItems = [...items];
            updatedItems[editIndex] = { ...itemData, amount };
            setItems(updatedItems);
            setEditIndex(null);
        } else {
            setItems([...items, { ...itemData, amount }]);
        }

        setItemData({
            itemName: "",
            price: "",
            quantity: "",
            unit: "",
            gst: ""
        });
    };

    const handleEdit = (index) => {
        setItemData(items[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        if (editIndex === index) {
            setItemData({
                itemName: "",
                price: "",
                quantity: "",
                unit: "",
                gst: ""
            });
            setEditIndex(null);
        }
    };

    // 🆕 Print handler
    const handlePrint = () => {
        window.print();
    };

    const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);

    return (
        <>
            {/* Inject print styles */}
            <style>{printStyles}</style>

            <h1 className="d-flex justify-content-center">Billing</h1>

            {/* Form Section (not included in print) */}
            <div className="container mt-1 d-flex justify-content-center">
                <Form>
                    <label>Billing Number</label>
                    <input type="text" style={{ width: '100px', height: '30px', marginRight: '15px' }} />
                    <label>Billing Date</label>
                    <input type="date" style={{ width: '150px', height: '30px', marginRight: '15px' }} />

                    <Form.Group className="mb-3">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Enter Name" style={{ width: '400px' }} />
                        <Form.Label>Customer Mobile Number</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Enter Mobile number" style={{ width: '400px' }} />
                    </Form.Group>
                </Form>
            </div>

            {/* Printable Section */}
            <div
                id="print-section"
                ref={printRef}
                className="container mt-1 d-flex justify-content-center flex-column"
                style={{
                    backgroundColor: '#f8f9fa',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    borderRadius: '8px',
                    fontFamily: 'Roboto, sans-serif'
                }}
            >
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Item Name*</Form.Label>
                        <Form.Control
                            name="itemName"
                            size="sm"
                            type="text"
                            placeholder="Enter Name"
                            value={itemData.itemName}
                            onChange={handleChange}
                            style={{ width: '400px' }}
                        />
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name="price"
                            size="sm"
                            type="text"
                            placeholder="Enter Price"
                            value={itemData.price}
                            onChange={handleChange}
                            style={{ width: '400px' }}
                        />
                        <Row className="mt-3">
                            <Col xs={6} md={4}>
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    name="quantity"
                                    size="sm"
                                    type="number"
                                    placeholder="Enter Quantity"
                                    value={itemData.quantity}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Label>Unit</Form.Label>
                                <Form.Select
                                    name="unit"
                                    size="sm"
                                    value={itemData.unit}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Unit</option>
                                    <option value="pcs">Pcs</option>
                                    <option value="kg">Kg</option>
                                </Form.Select>
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Label>GST</Form.Label>
                                <Form.Select
                                    name="gst"
                                    size="sm"
                                    value={itemData.gst}
                                    onChange={handleChange}
                                >
                                    <option value="">Select GST</option>
                                    <option value="5">5%</option>
                                    <option value="18">18%</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col className="d-flex justify-content-center">
                                <button type="button" className="btn btn-primary" onClick={handleAddItem}>
                                    {editIndex !== null ? "Update Item" : "Add Item"}
                                </button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>

                {items.length > 0 && (
                    <>
                        <Table striped bordered hover className="mt-4">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>GST (%)</th>
                                    <th>Amount (Incl. GST)</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.gst || '0'}</td>
                                        <td>{item.amount.toFixed(2)}</td>
                                        <td>
                                            <Button size="sm" variant="warning" className="me-2" onClick={() => handleEdit(index)}>Edit</Button>
                                            <Button size="sm" variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5" className="text-end fw-bold">Total</td>
                                    <td className="fw-bold">{totalAmount.toFixed(2)}</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </Table>

                        {/* 🖨️ Print Button */}
                        <Button variant="secondary" className="mt-2 align-self-end" onClick={handlePrint}>
                            Print Invoice
                        </Button>
                    </>
                )}
            </div>
        </>
    );
};

export default AddIteam;
