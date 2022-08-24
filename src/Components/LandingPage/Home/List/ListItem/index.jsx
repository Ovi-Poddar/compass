import React, { useState } from "react";
import "./styles.css";

import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { Card } from "react-bootstrap";

const ListItem = ({ item }) => {
  const {  business_name, profile_image, average_star_count, _id } = item;
  const business_id = _id;

  const [imageLoaded, setimageLoaded] = useState(false);

  const onImageLoaded = () => {
    setimageLoaded(true);
  };

  return (
    <Card className="listItem-wrap">
      <div style={{ width: "100%", height: "300px" }}>
        <img
          src={profile_image}
          onLoad={onImageLoaded}
          alt="image"
          style={{ width: "100%", height: "100%" }}
        />
        {!imageLoaded && (
          <div className="d-flex justify-content-center p-4" role="status">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </div>

      <Card.Footer className="d-flex justify-content-between">
        <Link to={`/business/${business_id}`}>
          <h4 className="ml-3">{business_name}</h4>
        </Link>
        {/* <span>🌟{rating}</span> */}
        <span>
          <Rating name="size-small" value={Math.round(average_star_count)} readOnly size="medium" />
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
