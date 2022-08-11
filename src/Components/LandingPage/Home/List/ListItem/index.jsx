import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const ListItem = (props) => (
  <div className="listItem-wrap">
    <img
      src={
        "https://images.squarespace-cdn.com/content/v1/5c6dcbf5f4755a48d74da555/1566361112664-1HH140I24PNJ60MQ0YKE/auto+repair+shop+houston+tx.jpg?format=2500w"
      }
      alt=""
    />
    <header>
      <Link to={`/businesshome/${props.item._id}`}>
        <h4>{props.item.business_name}</h4>
      </Link>
      <span>🌟{props.item.rating}</span>
    </header>
    {/* <footer>
      <p>
        <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer> */}
  </div>
);

export default ListItem;
