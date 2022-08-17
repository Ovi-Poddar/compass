import React, { useState, useContext, useEffect } from "react";


import Card from "react-bootstrap/Card";
import BusinessHomeContext from "../../../../Context/BusinessHome/BusinessHomeContext";
function ShortDetails(props){

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
      }

    useEffect(() => {
        getBusinessDetails(business_id);
        // eslint-disable-next-line
    }
    , []);

    return (
        <>
        <Card className="text-center ml-4 mt-4 shadow-lg" style={{ width: "30rem", position : "sticky" , top : "0"}}>
            <Card.Body>
                <Card.Title>{business.business_name}</Card.Title>
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
                </Card.Text>
            </Card.Body>
        </Card>
        </>

    );


};

export default ShortDetails;