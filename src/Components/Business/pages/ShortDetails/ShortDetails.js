import React, { useState, useContext, useEffect } from "react";

import "./shortdetails.css";
import Card from "react-bootstrap/Card";
import BusinessHomeContext from "../../../../Context/BusinessHome/BusinessHomeContext";
function ShortDetails(props) {
  const business_id = props.business_id;
  const host = "http://localhost:5000";

  const [business, setBusiness] = useState([]);

  const getBusinessDetails = async (business_id) => {
    //API Call
    const response = await fetch(
      `${host}/api/business/getbusiness/${business_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    console.log("hello");
    setBusiness(json);
  };

  useEffect(() => {
    getBusinessDetails(business_id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Card
        className="text-center ml-4 mt-4 shadow-lg"
        style={{ width: "30rem", position: "sticky", top: "0" }}
      >
        <Card.Body>
          <div class="top-container">
            {/* <img src="https://i.imgur.com/G1pXs7D.jpg" class="img-fluid profile-image" width="70"> */}

            <div class="ml-3">
              <h5 class="name">{business.business_name}</h5>
              <p class="category">{business.category}</p>
            </div>
          </div>

          <div class="middle-container d-flex justify-content-between align-items-center mt-2 p-1">
            <div class="icon-div p-2">
              <div class="round-div">
              <i class="fa-solid fa-cloud icon"></i>
              </div>
            </div>
            <div class="d-flex flex-column text-right mr-2">
              <span class="content">{business.about}</span>
            </div>
          </div>

          <div class="middle-container d-flex justify-content-between align-items-center mt-2 p-1">
            <div class="icon-div p-2">
              <div class="round-div">
              <i class="fa-solid fa-mobile icon"></i>
              </div>
            </div>
            <div class="d-flex flex-column text-right mr-2">
              <span class="content">{business.contact_no}</span>
            </div>
          </div>

          <div class="middle-container d-flex justify-content-between align-items-center mt-2 p-1">
            <div class="icon-div p-2">
              <div class="round-div">
              <i class="fa-solid fa-message icon"></i>
              </div>
            </div>
            <div class="d-flex flex-column text-right mr-2">
              <span class="content">{business.email}</span>
            </div>
          </div>

          <div class="middle-container d-flex justify-content-between align-items-center mt-2 p-1">
            <div class="icon-div p-2">
              <div class="round-div">
              <i class="fa-solid fa-location-crosshairs icon"></i>
              </div>
            </div>
            <div class="d-flex flex-column text-right mr-2">
              <span class="content">{business.address},{business.city},{business.district}</span>
            </div>
          </div>

          

          {/* <Card.Title>{business.business_name}</Card.Title>
                <Card.Text>
                    {business.about}
                </Card.Text>
                <Card.Text>
                    {business.contact_no}
                </Card.Text>
                <Card.Text>
                    {business.address}
                </Card.Text>
                <Card.Text>
                    {business.average_star_count}
                </Card.Text>
                <Card.Text>
                    {business.email}
                </Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default ShortDetails;
