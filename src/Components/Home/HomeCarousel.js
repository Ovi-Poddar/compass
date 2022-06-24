import React from "react";

import { Carousel } from "react-bootstrap";

import food from "../../Images/home_food.jpg";
import shop from "../../Images/home_shopping.jpg";
import business from "../../Images/home_business.unsplash.jpg";


export default function HomeCarousel() {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 h-50" src={food} alt="Food" />
          <Carousel.Caption>
            <h3  >Welcome To Compass!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 h-50" src={business} alt="Business" />
          <Carousel.Caption>
            <h3>Welcome To Compass!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={shop} alt="Shopping" />
          <Carousel.Caption>
            <h3>Welcome To Compass!</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
