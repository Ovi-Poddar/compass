import React from "react";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { ReviewContext } from "./ReviewContext";

const ReviewState = () => {
  const host = "http://localhost:5000";

  let { business_id } = useParams();

  const reviewsInitial = [];
  const [reviews, setReviews] = useState(reviewsInitial);

  // Get all Reviews of this business using: GET "/api/review/getallreviews".
  const getReviews = async () => {
    // API Call
    const response = await fetch(
      `${host}/api/review/getallreviews/${business_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    setReviews(json);
  };

  // Add a Review to a Business using: POST "/api/review/addreview/".
  const addReview = async (text, stars) => {
    // API Call
    const response = await fetch(
      `${host}/api/review/addreview/${business_id} `,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ text, stars }),
      }
    );

    const review = await response.json();
    setReviews([...reviews, review]);
  };

  return (
    <ReviewContext.Provider value={{ getReviews, addReview }}>
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewState;
