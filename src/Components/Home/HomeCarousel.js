import React from "react";

import { Carousel } from "react-bootstrap";

import food from "../../Images/home_food.jpg";
import shop from "../../Images/home_shopping.jpg";
import business from "../../Images/home_business.unsplash.jpg";

export default function HomeCarousel() {
  return (
    <div className="mx-2 mt-2">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 h-50" src={food} alt="Food" />
          <Carousel.Caption>
            <h3>Welcome To Compass!</h3>
            <p>
              With trusted local business information, photos and review
              content, Compass provides a one-stop local platform for consumers to
              discover, connect and transact with local businesses of all sizes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100 h-50" src={business} alt="Business" />
          <Carousel.Caption>
            <h3>Welcome To Compass!</h3>
            <p>
              With trusted local business information, photos and review
              content, Compass provides a one-stop local platform for consumers to
              discover, connect and transact with local businesses of all sizes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={shop} alt="Shopping" />
          <Carousel.Caption>
            <h3>Welcome To Compass!</h3>
            <p>
              With trusted local business information, photos and review
              content, Compass provides a one-stop local platform for consumers to
              discover, connect and transact with local businesses of all sizes
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
