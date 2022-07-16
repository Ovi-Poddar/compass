import React, { useState , useEffect} from "react";
import { Link, useNavigate  } from "react-router-dom";

import "./style_create_business.css";

export default function CreateBusiness(props) {
  const {showAlert } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      showAlert("Please login to create business", "warning");
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // <- add empty brackets here

  const [business_details, setBusiness_details] = useState({
    business_name: "",
    contact_no: "",
    address: "",
    district: "",
    city: "",
    category: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(business_details);

    const { business_name, contact_no, address, district, city, category } =
      business_details;

    console.log(business_details)

    const response = await fetch(
      "http://localhost:5000/api/business/createbusiness",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          business_name: business_name,
          contact_no: contact_no,
          address: address,
          district: district,
          city: city,
          category: category
          //opening_hours:opening_hours
        }),
      }
    );
    const json = await response.json();
    console.log(json);

    props.showAlert("Your business created Successfully", "success");

    setBusiness_details({
      business_name: "",
      contact_no: "",
      address: "",
      district: "",
      city: "",
      category: "",
      //      opening_hours: [""],
    });

    navigate("/landing");
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
              <div className="business-card-img-left d-none d-md-flex">
                {/* <!-- Background image for card set in CSS! --> */}
              </div>
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-bold business-h3">
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
                      id="district"
                      value={business_details.district}
                      onChange={onChange}
                      name="district"
                      placeholder="X district"
                      required
                    />
                    <label htmlFor="city">District</label>
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
                    <label htmlFor="area">City</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={business_details.address}
                      onChange={onChange}
                      name="address"
                      placeholder="00, Straet"
                      required
                    />
                    <label htmlFor="address">Address</label>
                  </div>
                  <div className=" my-4">
                    <select
                      className="form-select"
                      aria-label="Default select example" 
                      name="category" id="category" required
                      value={business_details.category}
                      onChange={onChange}
                    >
                      <option selected> Select a category </option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="AutoShop">AutoShop</option>
                      <option value="HomeService">HomeService</option>
                    </select>
                  </div>

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
}
