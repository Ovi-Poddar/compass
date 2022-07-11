import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style_create_business.css";

export default function CreateBusiness(props) {
  const navigate = useNavigate();

  const [business_details, setBusiness_details] = useState({
    business_name: "",
    contact_no: "",
    address: "",
    area: "",
    city: "",
    category: "",
    //opening_hours: [""],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(business_details);

    const {
      business_name,
      contact_no,
      address,
      area,
      city,
      category,
    } = business_details;
    
    const response = await fetch("http://localhost:5000/api/business/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        business_name: business_name,
        contact_no: contact_no,
        address: address,
        area: area,
        city: city,
        category: category,
        //opening_hours:opening_hours
      }),
    });
    const json = await response.json();
    console.log(json);

    props.showAlert("Creation Successful", "success");

    setBusiness_details({
      business_name: "",
      contact_no: "",
      address: "",
      area: "",
      city: "",
      category: "",
//      opening_hours: [""],
    });

    //navigate("/");
  };

  const onChange = (e) => {
    setBusiness_details({
      ...business_details,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="container signup-body">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex">
                {/* <!-- Background image for card set in CSS! --> */}
              </div>
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-bold signup-h3">
                  Create Your Business
                </h5>
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="businessName"
                      value={business_details.business_name}
                      onChange={onChange}
                      name="business_name"
                      placeholder="mybusinessname"
                      required
                      autoFocus
                      minLength={5}
                    />
                    <label htmlFor="businessName">BusinessName</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="contact_no"
                      value={business_details.contact_no}
                      onChange={onChange}
                      name="contact_no"
                      placeholder="01XXXXXXXXX"
                      required
                    />
                    <label htmlFor="contact_no">Contact No</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      value={business_details.city}
                      onChange={onChange}
                      name="city"
                      placeholder="X city"
                      required
                    />
                    <label htmlFor="city">District</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="area"
                      value={business_details.area}
                      onChange={onChange}
                      name="area"
                      placeholder="X area"
                      required
                    />
                    <label htmlFor="area">Area</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={business_details.address}
                      onChange={onChange}
                      name="address"
                      placeholder="00, X Street"
                      required
                    />
                    <label htmlFor="address">Street</label>
                  </div>

                  <div className="form-floating mb-3">
                    {/* <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Select a Category
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <button class="dropdown-item" type="button" >
                          Restaurant
                        </button>
                        <button class="dropdown-item" type="button">
                          Home service
                        </button>
                        <button class="dropdown-item" type="button">
                          Autoshop
                        </button>
                      </div>
                    </div> */}
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      value={business_details.category}
                      onChange={onChange}
                      name="category"
                      placeholder="Category"
                      required
                    />
                    <label htmlFor="category">Select a Category</label>
                  </div>

                  {/* <div className="form-floating mb-3"> add checkboxes and input fields for opening hour
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={business_details.address}
                      onChange={onChange}
                      name="address"
                      placeholder="00, X Street"
                      required
                    />
                    <label htmlFor="address">Street</label>
                  </div> */}

                  <div className="d-grid mb-2">
                    <button
                      // className="btn btn-lg btn-signup fw-bold text-uppercase text-white"
                      className="btn btn-danger btn-lg btn-block"
                      style={{ backgroundColor: "#E00707" }}
                      type="submit"
                    >
                      Create Business
                    </button>
                  </div>

                  <Link className="d-block text-center mt-2 small" to="/">
                    Go to Home
                  </Link>

                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
