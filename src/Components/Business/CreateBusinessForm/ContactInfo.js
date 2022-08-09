import React from "react";
import { Form } from "react-bootstrap";

const ContactInfo = ({ handleChange, email, contact_no }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Contact Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Email"
          onChange={handleChange("email")}
          name="email"
          value={email}
        />
      </Form.Group>
      <div class="col-md-6">
  </div>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Phone Number"
          onChange={handleChange("contact_no")}
          name="contact_no"
          value={contact_no}
        />
      </Form.Group>
    </div>
  );
};

export default ContactInfo;
