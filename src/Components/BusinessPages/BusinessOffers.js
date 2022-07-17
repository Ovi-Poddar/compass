import React from "react";

import { Carousel } from "react-bootstrap";

import place1 from "../../Images/business_place1.jpg";
import place2 from "../../Images/business_place2.jpg";
import place3 from "../../Images/business_place3.jpg";
import cheese from "../../Images/cheese.jpg";
import margharita from "../../Images/m.jpg";
import pepperoni from "../../Images/pepperoni.jpg";
import sd from "../../Images/sd.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BusinessOffers() {
  return (
    <>
      <div className="Carousel">
        <div className="image_container" style={{ position: "relative" }}>
          <img
            className="places  m-auto"
            alt="Sultan's Dine"
            height="300"
            src={place1}
            width="480"
          />
          <div
            className="image_text m-auto"
            style={{
              position: "absolute",
              top: "40%",
              left: "35%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1 className="css-dyjx0f" style={{ color: "white" }}>
              Sultan's Dine
            </h1>
          </div>
          <img
            className="places  m-auto"
            alt="Sultan's Dine"
            height="300"
            src={place2}
            width="480"
          />
          <img
            className="places  m-auto"
            alt="Sultan's Dine"
            height="300"
            src={place3}
            width="470"
          />
          <img
            className="places  m-auto"
            alt="Sultan's Dine"
            height="300"
            src={place1}
            width="470"
          />
        </div>
        {/* external link container */}
        <div
          className="link_container my-4"
          style={{
            marginLeft: "600px",
            width: "60%",
            border: "3px solid #ffffff",
            padding: "10px",
            height: "75px",
            overflow: "hidden",
          }}
        >
          <div className="write_review_container" style={{ float: "left" }}>
            <Link to="/review">
              <Button
                className="me-2"
                role="button"
                style={{ background: "red" }}
              >
                <div className="review_icon" style={{ float: "left" }}>
                  <i className="bi bi-star me-2"></i>
                </div>
                <div className="review_text" style={{ float: "right" }}>
                  Write A Review
                </div>
              </Button>
            </Link>
          </div>
          <div className="add_photo_container" style={{ float: "left" }}>
            <Link to="#">
              <Button
                className="me-2"
                role="button"
                style={{ background: "red" }}
              >
                <div className="photo_icon" style={{ float: "left" }}>
                  <i className="bi bi-camera me-2"></i>
                </div>
                <div className="photo_text" style={{ float: "right" }}>
                  Add Photo
                </div>
              </Button>
            </Link>
          </div>
          <div className="share_container" style={{ float: "left" }}>
            <Link to="#">
              <Button className="me-2" role="button">
                <div className="share_icon" style={{ float: "left" }}>
                  <i className="bi bi-share me-2"></i>
                </div>
                <div className="share_text" style={{ float: "right" }}>
                  Share
                </div>
              </Button>
            </Link>
          </div>
          <div className="save_container" style={{ float: "left" }}>
            <Link to="#">
              <Button className="me-2" role="button">
                <div className="save_icon" style={{ float: "left" }}>
                  <i className="bi bi-save me-2"></i>
                </div>
                <div className="save_text" style={{ float: "right" }}>
                  Save
                </div>
              </Button>
            </Link>
          </div>
        </div>
        {/* tab container */}
        <div
          className="tab_container my-4"
          style={{ float: "left", marginLeft: "100px" }}
        >
          <div className="home" style={{ marginBottom: "5px" }}>
            <Link to="/businesshome">
              <Button
                className="me-2"
                role="button"
                style={{ background: "red", color: "white", width: "180px" }}
              >
                <b>Home</b>
              </Button>
            </Link>
          </div>
          <div className="updates" style={{ marginBottom: "5px" }}>
            <Link to="/businessupdates">
              <Button
                className="me-2"
                role="button"
                style={{ background: "red", color: "white", width: "180px" }}
              >
                <b>Updates</b>
              </Button>
            </Link>
          </div>
          <div className="location_hours" style={{ marginBottom: "5px" }}>
            <Link to="/businesshours">
              <Button
                className="me-2"
                role="button"
                style={{ background: "red", color: "white", width: "180px" }}
              >
                <b>Location & Hours</b>
              </Button>
            </Link>
          </div>
          <div className="amenities" style={{ marginBottom: "5px" }}>
            <Link to="/businessamenities">
              <Button
                className="me-2"
                role="button"
                style={{ background: "red", color: "white", width: "180px" }}
              >
                <b>Amenities</b>
              </Button>
            </Link>
          </div>
          <div className="offers" style={{ marginBottom: "5px" }}>
            <Link to="#">
              <Button
                className="me-2"
                role="button"
                style={{ background: "white", color: "blue", width: "180px" }}
              >
                <b>Offers</b>
              </Button>
            </Link>
          </div>
          <div className="query" style={{ marginBottom: "5px" }}>
            <Link to="/businessquery">
              <Button
                className="me-2"
                role="button"
                style={{ background: "red", color: "white", width: "180px" }}
              >
                <b>Ask The Community</b>
              </Button>
            </Link>
          </div>
        </div>
        {/* content container */}
        <div
          className="content_container"
          style={{
            marginLeft: "450px",
            width: "70%",
            border: "3px solid #ffffff",
            padding: "10px",
            height: "550px",
            overflow: "hidden",
            marginTop: "-10px",
          }}
        >
          <div
            className="menu_container my-4"
            style={{
              marginLeft: "50px",
              width: "700px",
              display: "block",
              float: "left",
            }}
          >
            <div
              className="menu"
              style={{ height: "40px", marginBottom: "20px" }}
            >
              <h2>
                <b>Ongoing Sales & Offers</b>
              </h2>
            </div>
            <div
              className="offer_image_container"
              style={{
                width: "700px",
                border: "3px solid #ffffff",
                padding: "10px",
                height: "380px",
                overflow: "hidden",
                border: "1px solid gray",
                marginBottom: "20px",
              }}
            >
              {/* offer header */}
              <div
                className="offer_header_container"
                style={{ marginBottom: "20px" }}
              >
                <Button
                  role="banner"
                  style={{
                    marginLeft: "50px",
                    background: "#d47b3b",
                    width: "580px",
                    height: "50px",
                  }}
                >
                  <b>
                    <p>
                      Seasonal Sale going on!!Grab these delicious offers soon!!
                    </p>
                  </b>
                </Button>
              </div>
              {/* offers */}
              <div
                className="pizza1"
                style={{ float: "left", marginRight: "10px", width: "215px" }}
              >
                <img
                  src={cheese}
                  alt="cheese pizza"
                  style={{
                    width: "215px",
                    height: "150px",
                    marginBottom: "10px",
                    float: "left",
                  }}
                />
                <figcaption style={{ marginLeft: "30px" }}>
                  <b style={{ fontSize: "18px" }}>Classic Cheese Pizza</b>
                </figcaption>
                <figcaption style={{ marginLeft: "10px" }}>
                  <b>
                    <p style={{ color: "red", fontSize: "24px" }}>
                      Buy 2 Large Get 1 Small Pizza Free!!
                    </p>
                  </b>
                </figcaption>
              </div>
              <div
                className="pizza2"
                style={{ float: "left", marginRight: "10px", width: "215px" }}
              >
                <img
                  src={margharita}
                  alt="margharita pizza"
                  style={{
                    width: "215px",
                    height: "150px",
                    marginBottom: "10px",
                    float: "left",
                  }}
                />
                <figcaption style={{ marginLeft: "5px" }}>
                  <b style={{ fontSize: "18px" }}>Classic Margharita Pizza</b>
                </figcaption>
                <figcaption style={{ marginLeft: "10px" }}>
                  <b>
                    <p style={{ color: "red", fontSize: "24px" }}>
                      Buy 2 Large Get 1 Small Pizza Free!!
                    </p>
                  </b>
                </figcaption>
              </div>
              <div
                className="pizza3"
                style={{ float: "left", marginRight: "10px", width: "215px" }}
              >
                <img
                  src={pepperoni}
                  alt="pepperoni pizza"
                  style={{
                    width: "215px",
                    height: "150px",
                    marginBottom: "10px",
                    float: "left",
                  }}
                />
                <figcaption style={{ marginLeft: "5px" }}>
                  <b style={{ fontSize: "18px" }}>Classic Pepperoni Pizza</b>
                </figcaption>
                <figcaption style={{ marginLeft: "10px" }}>
                  <b>
                    <p style={{ color: "red", fontSize: "24px" }}>
                      Buy 2 Large Get 1 Small Pizza Free!!
                    </p>
                  </b>
                </figcaption>
              </div>
            </div>
            <div className="link_container" style={{ marginLeft: "250px" }}>
              <Link to="#">
                <Button
                  role="button"
                  style={{ background: "white", color: "blue" }}
                >
                  <b>View All Offers</b>
                </Button>
              </Link>
            </div>
          </div>
          <div
            className="info_container"
            style={{ float: "right", marginTop: "30px" }}
          >
            <div className="phone_container" style={{ marginBottom: "20px" }}>
              <Button
                className="me-2"
                role="banner"
                style={{ width: "300px", background: "white" }}
              >
                <div
                  className="phone_icon"
                  style={{
                    marginLeft: "10px",
                    float: "left",
                    alignContent: "start",
                  }}
                >
                  <i
                    className="bi bi-telephone me-2"
                    style={{ color: "red" }}
                  ></i>
                </div>
                <div
                  className="phone_text"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: "50px",
                    float: "left",
                    color: "black",
                    width: "100px",
                  }}
                >
                  01843164367
                </div>
              </Button>
            </div>
            <div
              className="location_container"
              style={{ marginBottom: "25px" }}
            >
              <Button
                className="me-2"
                role="banner"
                style={{ width: "300px", background: "white" }}
              >
                <div
                  className="location_icon"
                  style={{
                    marginLeft: "10px",
                    float: "left",
                  }}
                >
                  {/* <i className="bi bi-map me-2" style={{ color: "red" }}></i> */}
                </div>
                <div
                  className="location_text"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    float: "left",
                    marginLeft: "50px",
                    color: "black",
                    width: "200px",
                  }}
                >
                  Rangs KB Square, Sat Masjid Road, Jigatala
                </div>
              </Button>
            </div>
            <div className="suggestion_container">
              <Button
                className="me-2"
                role="banner"
                style={{ width: "300px", background: "white" }}
              >
                <h5 style={{ color: "black" }}>You Might Also Like..</h5>
                <div
                  className="suggestion_icon"
                  style={{
                    marginLeft: "10px",
                    float: "left",
                  }}
                >
                  <img
                    src={sd}
                    alt="Sultan's Dine"
                    width="80px"
                    height="50px"
                  />
                  <figcaption style={{ color: "black", alignText: "center" }}>
                    Sultan's Dine, Dhanmondi
                  </figcaption>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
