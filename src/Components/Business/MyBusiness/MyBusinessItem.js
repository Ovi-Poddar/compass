import React from "react";

// import "./styles.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MyBusinessItem = (props) => {
  return (
    // <div className="col-md-3 col-sm-6 mx-3 mb-4">
    //   <div className=" my-card my-my-card-block ">
    //     {/* <h1 className="my-card-title my-my-card-title text-right">
    //       <ArrowForwardIcon> </ArrowForwardIcon>
    //     </h1> */}
    //     <img
    //       src={require("../../../Images/mybusiness.jpg")}
    //       alt="Photo of sunset"
    //       className="my-card-img-top p-1"
    //     />
    //     {/* <h5 className="my-my-card-title mt-3 mb-3 p-4">
    //       {props.business.business_name}
    //     </h5>
    //     <p className="my-my-card-text">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias hic
    //       maiores at in vitae voluptas nisi aliquid atque! Eos in iusto laborum
    //       dolorem quidem commodi praesentium saepe recusandae animi ad quos
    //       temporibus dignissimos reiciendis vero earum, magnam mollitia. Placeat
    //       temporibus ipsam sunt cum at eos assumenda eaque dolor laudantium
    //       distinctio.
    //     </p> */}
    //     <h5 className="my-my-card-title">my-card title</h5>
    //     <p className="my-my-card-text">
    //       Some quick example text to build on the my-card title and make up the
    //       bulk of the my-card's content.
    //     </p>
    //     <a href="#" className="btn btn-primary mt-2" role="button">
    //       Visit
    //     </a>
    //   </div>
    // </div>
    <div className="col-4">
      <Card style={{ width: "18rem" }} variant="primary" className="mb-3">
        <Card.Img
          variant="top"
          src={require("../../../Images/mybusiness.jpg")}
        />
        <Card.Body>
          <Card.Title className="text-success fw-bold">
            {props.business.business_name}
          </Card.Title>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, aliquid!
          </Card.Text>
          <Button variant="warning">Visit</Button>
          <Link to={`/reviews/${props.business._id}`}> {props.business.review_count} Reviews </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyBusinessItem;
