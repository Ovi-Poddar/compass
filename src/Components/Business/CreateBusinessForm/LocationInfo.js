import React from "react";
import { Form } from "react-bootstrap";

const LocationInfo = ({ handleChange, district, city, address }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Location Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="District"
          onChange={handleChange("district")}
          name="district"
          value={district}  
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="City"
          onChange={handleChange("city")}
          name="city"
          value={city}
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Street Address"
          onChange={handleChange("address")}
          name="address"
          value={address}
        />
      </Form.Group>
    </div>
  );
};

export default LocationInfo;
