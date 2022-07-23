import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReviewItem from "../../Reviews/ReviewItem";
import SubmitReview from "../../Reviews/SubmitReview";
import SideBar from "../Sidebar/Sidebar";

import Card from "react-bootstrap/Card";

import ReviewContext from "../../../Context/Review/ReviewContext";

export const Reviews = (props) => {

  let { business_id } = useParams();

  const context = useContext(ReviewContext);
  const {reviews, getReviews } = context;

  useEffect(() => {
    getReviews(business_id);
    // eslint-disable-next-line
}, [])

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
                              business_id = {business_id}
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
              <SubmitReview  showAlert = {props.showAlert} business_id = {business_id} />
            </div>
          </div>
        </div>
      </SideBar>
    </>
  );
};
