import React, { useState, useEffect } from "react";
import ReviewItem from "../../Reviews/ReviewItem";
import SubmitReview from "../../Reviews/SubmitReview";
import SideBar from "../Sidebar/Sidebar";

import Card from "react-bootstrap/Card";

export const Reviews = () => {
  const host = "http://localhost:5000";
  const reviewsInitial = [];
  const [reviews, setReviews] = useState(reviewsInitial);

  // Get all Businesses
  const getReviews = async () => {
    // API Call
    const response = await fetch(
      `${host}/api/review/getallreviews/62d6f63d15cc5eca76126aab`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    console.log(json);
    const allreviews = JSON.parse(JSON.stringify(json));
    setReviews(allreviews);
  };

  useEffect(() => {
    getReviews();
  }, []); // <- add empty brackets here

  return (
    <>
      <SideBar>
        <div class="container">
          <div className="row">
            <div className="col-7">
              <div className="container my-1 py-4 " style={{ width: "53rem" }}>
                <div className="row d-flex justify-content-start ">
                  <div className="col-md-12 col-lg-10">
                    <Card className="shadow-md">
                      <Card.Body className="p-4">
                        <h4 className="mb-4 text-danger">Recent Reviews</h4>
                        {reviews.map((review) => {
                          return (
                            <ReviewItem
                              key={review._id}
                              review={review}
                            />
                          );
                        })}
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <SubmitReview />
            </div>
          </div>
        </div>
      </SideBar>
    </>
  );
};
