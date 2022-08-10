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
        <Card.Img
          variant="top"
          // src={require("../../../Images/mybusiness.jpg")}
          style={{ height: "200px" }}
          src={props.business.profile_image}
        />
        <Card.Body>
          <Card.Title className="text-success fw-bold">
            <span class="badge bg-success">{props.business.business_name}</span>
          </Card.Title>
          <Card.Text>
           {props.business.about.substring(0, 25)} {props.business.about.length >= 25 && '...'}
          </Card.Text>
          <Link to={`/business/${props.business._id}`}>
            <Button variant="warning">Visit</Button>
          </Link>
          <Link to={`/reviews/${props.business._id}`}>
            {" "}
            {props.business.review_count} Reviews{" "}
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyBusinessItem;
