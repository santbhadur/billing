import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import axios from 'axios';


// 🆕 Step 1: CSS for print


const AddIteam = () => {
const [customerName, setCustomerName] = useState("");
const [customerMobile, setCustomerMobile] = useState("");
const [successMessage, setSuccessMessage] = useState("");


    const [items, setItems] = useState([]);
    const [itemData, setItemData] = useState({
        itemName: "",
        price: "",
        quantity: "",
        unit: "",
        gst: ""
    });
    const [billingNumber, setBillingNumber] = useState(1);
    const [billingDate, setBillingDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split("T")[0];
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


        // Reset item fields
        setItemData({
            itemName: "",
            price: "",
            quantity: "",
            unit: "",
            gst: ""
        });

        // Increment billing number if it's a new invoice
        if (items.length === 0 && editIndex === null) {
            setBillingNumber((prev) => prev + 1);
            setBillingDate(new Date().toISOString().split("T")[0]);
        }

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
    setSuccessMessage("Item updated successfully!");
} else {
    setItems([...items, { ...itemData, amount }]);
    setSuccessMessage("Item added successfully!");
}

// Clear message after 2 seconds
setTimeout(() => setSuccessMessage(""), 2000);


        setItemData({
            itemName: "",
            price: "",
            quantity: "",
            unit: "",
            gst: ""
        });
        if (editIndex !== null) {
            const updatedItems = [...items];
            updatedItems[editIndex] = { ...itemData, amount };
            setItems(updatedItems);
            setEditIndex(null);
        } else {
            setItems([...items, { ...itemData, amount }]);
        }
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

const handleSaveInvoice = async () => {
  if (!isCustomerInfoValid || items.length === 0) {
    alert("Please enter customer info and at least one item.");
    return;
  }

  const invoiceData = {
    customerName,
    customerMobile,
    billingNumber,
    billingDate,
    items
  };

  try {
    const res = await axios.post('http://localhost:8000/save-invoice', invoiceData);
    alert(res.data.message || "Invoice saved successfully!");

    // Optional: Reset form after save
    setCustomerName("");
    setCustomerMobile("");
    setItems([]);
    setBillingNumber((prev) => prev + 1);

  } catch (err) {
    console.error("Error saving invoice:", err);
    alert("Failed to save invoice.");
  }
};


    const totalAmount = items.reduce((acc, item) => acc + item.amount, 0);
    const isCustomerInfoValid = customerName.trim() !== "" && customerMobile.trim() !== "";


    return (
        <>
            {/* Inject print styles */}


            <h1 className="d-flex justify-content-center">Billing</h1>

            {/* Form Section (not included in print) */}
            <div className="container mt-1 d-flex justify-content-center">
                <Form>

                    <label>Billing Number</label>
                    <input
                        type="text"
                        value={billingNumber}
                        readOnly
                        style={{ width: '100px', height: '30px', marginRight: '15px' }}
                    />
                    <label>Billing Date</label>
                    <input
                        type="date"
                        value={billingDate}
                        readOnly
                        style={{ width: '150px', height: '30px', marginRight: '15px' }}
                    />

                    <Form.Group className="mb-3">
  <Form.Label>Customer Name</Form.Label>
  <Form.Control
    size="sm"
    type="text"
    placeholder="Enter Name"
    style={{ width: '400px' }}
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
    required
  />

  <Form.Label>Customer Mobile Number</Form.Label>
  <Form.Control
    size="sm"
    type="text"
    placeholder="Enter Mobile number"
    style={{ width: '400px' }}
    value={customerMobile}
    onChange={(e) => setCustomerMobile(e.target.value)}
    required
  />
</Form.Group>

                </Form>
            </div>
             {successMessage && (
  <div className="alert alert-success text-center" role="alert">
    {successMessage}
  </div>
)}

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
                              disabled={!isCustomerInfoValid}

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
                              disabled={!isCustomerInfoValid}

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
                                      disabled={!isCustomerInfoValid}

                                />
                            </Col>
                            <Col xs={6} md={4}>
                                <Form.Label>Unit</Form.Label>
                                <Form.Select
                                    name="unit"
                                    size="sm"
                                    value={itemData.unit}
                                    onChange={handleChange}
                                      disabled={!isCustomerInfoValid}

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
                                      disabled={!isCustomerInfoValid}

                                >
                                    <option value="">Select GST</option>
                                    <option value="5">5%</option>
                                    <option value="18">18%</option>
                                </Form.Select>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col className="d-flex justify-content-center">
                                <button type="button" className="btn btn-primary" onClick={handleAddItem} 
                                  disabled={!isCustomerInfoValid}>
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

                        <Row className="mt-3 mb-3">
  <Col className="d-flex justify-content-center">
    <Button variant="success" onClick={handleSaveInvoice}>
      Save Invoice
    </Button>
  </Col>
</Row>



                    </>
                )}
            </div>
        </>
    );
};

export default AddIteam;
