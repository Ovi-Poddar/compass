import React from "react";

import "./styles.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MyBusinessItem = (props) => {
  return (
    <div className="col-md-3 col-sm-6 mx-3 mb-4">
      <div className="card card-block ">
        <h4 className="card-title text-right">
          <ArrowForwardIcon> </ArrowForwardIcon>
        </h4>
        <img
          src={require("../../../Images/mybusiness.jpg")}
          alt="Photo of sunset"
        />
        <h5 className="card-title mt-3 mb-3 p-4">
          {props.business.business_name}
        </h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias hic
          maiores at in vitae voluptas nisi aliquid atque! Eos in iusto laborum
          dolorem quidem commodi praesentium saepe recusandae animi ad quos
          temporibus dignissimos reiciendis vero earum, magnam mollitia. Placeat
          temporibus ipsam sunt cum at eos assumenda eaque dolor laudantium
          distinctio.
        </p>
      </div>
    </div>
  );
};

export default MyBusinessItem;
