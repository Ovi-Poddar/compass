import React from "react";

import "./styles.css";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const AboutUs = () => {
  return (
    <>
      <div>
        <div className="about">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="desc">
            <p>
              If you've ever searched for restaurant reviews on the internet,
              odds are you visited Yelp. It's a lot of people's go-to when
              looking for a place to eat. But, it's a lot more than that. Here's
              what you need to know.{" "}
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="card col-4 border-0">
            <div className="card_img">
              {/* <i className="fas fa-rocket"></i> */}
              <TravelExploreIcon
                className="fas"
                style={{ fontSize: "70px", marginTop: "-40px" }}
              />
            </div>
            <div className="card_title">Discover</div>
            <div className="card_body">
              <p>
                Compass is a popular online directory for discovering local
                businesses ranging from bars, restaurants, and cafes to
                hairdressers, spas, and gas stations and so on.
              </p>
            </div>
          </div>
          <div className="card col-4 border-0">
            <div className="card_img">
              <AddBusinessIcon
                className="fab"
                style={{ fontSize: "70px", marginTop: "-40px" }}
              />
            </div>
            <div className="card_title">Create</div>
            <div className="card_body">
              <p>
                You can create your own business here. It is very simple and
                cost free and can be done by anyone. Compass helps you plan,
                start and grow your own business.
              </p>
            </div>
          </div>
          <div className="card col-6 d-flex justify-content-center border-0">
            <div className="card_img">
              <ConnectWithoutContactIcon
                className="fas"
                style={{ fontSize: "70px", marginTop: "-40px" }}
              />
            </div>
            <div className="card_title">Improve Your Business</div>
            <div className="card_body">
              <p>
                Compass is a top review site for marketing local businesses.
                Being on Compass helps you attract new customers and address
                existing customers' feedback to improve your company. Compass has a
                strong social aspect and encourages its users to leave written
                reviews, star ratings, and photos of their experience with each
                business they visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
