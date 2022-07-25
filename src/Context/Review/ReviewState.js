import React from "react";
import { useState, useContext } from "react";

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

  // Delete a Review using: DELETE "/api/review/deletereview/".
  const deleteReview = async (review_id) => {
    // API Call
    const response = await fetch(
      `${host}/api/review/deletereview/${review_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = response.json();
    const newReviews = reviews.filter((review) => {
      return review._id !== review_id;
    });
    setReviews(newReviews);
  };

  // Edit a Review using: PUT "/api/review/updatereview/".
  const editReview = async (review_id, text, stars) => {
    // API Call
    const response = await fetch(
      `${host}/api/review/updatereview/${review_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ text, stars }),
      }
    );
    const json = await response.json();

    let newReviews = JSON.parse(JSON.stringify(reviews));

    // Find the review to be edited and edit it in client side
    newReviews.forEach((review) => {
      if (review._id === review_id) {
        review.text = text;
        review.stars = stars;
      }
    });
    setReviews(newReviews);
  };

  return (
    <ReviewContext.Provider
      value={{ getReviews, addReview, reviews, deleteReview , editReview}}
    >
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewState;
