import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { Card } from "react-bootstrap";

const ListItem = ({ item }) => {
  const {business_name, profile_image, rating, _id } = item;
  const business_id = _id;
  return (
    <Card className="listItem-wrap">
      <img src={profile_image} alt="image" />
      <Card.Footer className="d-flex justify-content-between">
        <Link to={`/business/${business_id}`}>
          <h4 className="ml-3">{business_name}</h4>
        </Link>
        {/* <span>🌟{rating}</span> */}
        <span>
          <Rating name="size-small" value={5} readOnly size="medium" />
        </span>
      </Card.Footer>
      {/* <footer>
      <p>
        <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer> */}
    </Card>
  );
};

export default ListItem;
