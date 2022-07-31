import React, { useState, useEffect } from "react";

import MyBusinessItem from "./MyBusiness/MyBusinessItem";

import "./MyBusiness/styles.css";

function ShowOwnBusiness() {
  const host = "http://localhost:5000";
  const businessesInitial = [];
  const [businesses, setBusinesses] = useState(businessesInitial);

  // Get all Businesses
  const getBusinesses = async () => {
    // API Call
    const response = await fetch(`${host}/api/business/getownbusinesses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    const businesses = JSON.parse(JSON.stringify(json));
    setBusinesses(businesses);
  };

  useEffect(() => {
    getBusinesses();
  }, []); // <- add empty brackets here

  return (
    <>
      <div className="d-flex justify-content-center text-center container">
        <h2 className="my-4">
          {businesses.length === 0 && "No Businesses to show"}
        </h2>
      </div>
      {/* <div className="row my-4 container">
        {businesses.map((business) => (
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{business.business_name}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/businesshome" className="btn btn-primary">
                  Visit {business.business_name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="container mt-2">
        <div className="row d-flex jusitify-content-center">
          {businesses.map((business) => {
            return <MyBusinessItem key={business._id} business={business} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ShowOwnBusiness;
