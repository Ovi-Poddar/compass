import React from "react";
import { Form } from "react-bootstrap";


const PersonalInfo = ({ handleChange, business_name, category }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Business Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Business Name"
          onChange={handleChange("business_name")}
          name="business_name"
          value={business_name}
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Choose one category"
          as="select"
          onChange={handleChange("category")}
          name="category"
          value={category || ""}
        >
          <option selected disabled>
            Choose one category
          </option>
          <option value="Restaurent">Restaurent</option>
          <option value="AutoShop">AutoShop</option>
          <option value="HomeService">HomeService</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default PersonalInfo;
