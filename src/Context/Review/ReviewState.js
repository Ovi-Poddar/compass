import React from "react";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import ReviewContext from "./ReviewContext";

const ReviewState = (props) => {
  const host = "http://localhost:5000";

  const reviewsInitial = [];
  const [reviews, setReviews] = useState(reviewsInitial);

  // Get all Reviews of this business using: GET "/api/review/getallreviews".
  const getReviews = async (business_id) => {
    // API Call
    const response = await fetch(
      `${host}/api/review/getallreviews/${business_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setReviews(json);
  };

  // Add a Review to a Business using: POST "/api/review/addreview/".
  const addReview = async (text, stars, business_id) => {
    // API Call
    const response = await fetch(
      `${host}/api/review/addreview/${business_id} `,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ text: text, rating: stars }),
      }
    );
    const addedReview = await response.json();
    setReviews([addedReview].concat(reviews));
  };

  return (
    <ReviewContext.Provider value={{ getReviews, addReview, reviews }}>
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewState;
