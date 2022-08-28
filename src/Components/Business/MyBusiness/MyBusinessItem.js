import React from "react";

// import "./styles.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MyBusinessItem = (props) => {
  return (
    <div className="col-4">
      <Card style={{ width: "18rem" }} variant="primary" className="mb-3">
        <div className=""> 
        <Card.Img
          variant="top"
          // src={require("../../../Images/mybusiness.jpg")}
          style={{ height: "200px", width: "100%" }}
          src={props.business.profile_image}
        /> </div>
        <Card.Body style={{height:"200px"}}>
          <Card.Title className="text-success fw-bold">
            <span class="badge bg-success">{props.business.business_name}</span>
          </Card.Title>
          <Card.Text>
           {props.business.about.substring(0, 25)} {props.business.about.length >= 25 && '...'}
          </Card.Text>
          <Link to={`/business/${props.business._id}`}>
            <Button variant="warning">Visit</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyBusinessItem;
