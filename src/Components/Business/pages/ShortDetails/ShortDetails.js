import React, { useState, useContext, useEffect } from "react";

import Card from "react-bootstrap/Card";
import BusinessHomeContext from "../../../../Context/BusinessHome/BusinessHomeContext";
function ShortDetails(props){

    const business_id = props.business_id;

    const { business_details, getBusinessDetails } = useContext(BusinessHomeContext);

    useEffect(() => {
        getBusinessDetails(business_id);
        // eslint-disable-next-line
    }
    , []);

    return (
        <>
        <Card className="text-center ml-4 mt-4 shadow-lg" style={{ width: "30rem", position : "sticky" , top : "0"}}>
            <Card.Body>
                <Card.Title>{business_details.business_name}</Card.Title>
                <Card.Text>
                    {business_details.about}
                </Card.Text>
                <Card.Text>
                    {business_details.contact_no}
                </Card.Text>
                <Card.Text>
                    {business_details.address}
                </Card.Text>
                <Card.Text>
                    {business_details.average_star_count}
                </Card.Text>
                <Card.Text>
                    {business_details.email}
                </Card.Text>
            </Card.Body>
        </Card>
        </>

    );


};

export default ShortDetails;