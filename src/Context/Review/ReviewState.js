import React from "react";
import { useState, useContext, useEffect } from "react";

import ReviewContext from "./ReviewContext";

import UserContext from "../../Context/Users/UserContext";

const ReviewState = (props) => {
  const host = "http://localhost:5000";

  const reviewsInitial = [];
  const [reviews, setReviews] = useState(reviewsInitial);

  const userContext = useContext(UserContext);
  const { user, getUser } = userContext;

  // Get all Reviews of this business using: GET "/api/review/getallreviews".
  const getReviews = async (business_id) => {
    getUser();
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

    //check if the review is liked by the user
    if (user) {
      const reviews = json.map((review) => {
        const isLiked = review.users_who_like.includes(user._id);
        const isDisliked = review.users_who_dislike.includes(user._id);
        return {
          ...review,
          isLiked,
          isDisliked,
        };
      });
      setReviews(reviews);
    }
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

  // Increase a thumbUp to review
  const thumbUp = async (review_id) => {
    // API Call
    const response = await fetch(`${host}/api/review/thumbup/${review_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    console.log(user._id);
    const newReviews = reviews.map((review) => {
      if (review._id === review_id && !review.users_who_like.includes(user._id)) {
        review.useful_count += 1;
        review.isLiked = true;
        review.users_who_like.push(user._id);
      }
      else if (review._id === review_id && review.users_who_like.includes(user._id)) {
        review.useful_count -= 1;
        review.isLiked = false;
        review.users_who_like.splice(review.users_who_like.indexOf(user._id), 1);
      }
      if (review._id === review_id && review.users_who_dislike.includes(user._id)) {
        review.not_useful_count -= 1;
        review.isDisliked = false;
        review.isLiked = true;
        review.users_who_dislike.splice(review.users_who_dislike.indexOf(user._id), 1);
      }
      return review;
    });
    setReviews(newReviews);
  };

  //Increase a thumbDown to review
  const thumbDown = async (review_id) => {
    // API Call
    const response = await fetch(`${host}/api/review/thumbdown/${review_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    const newReviews = reviews.map((review) => {
      if (review._id === review_id && !review.users_who_dislike.includes(user._id)) {
        review.not_useful_count += 1;
        review.isDisliked = true;
        review.users_who_dislike.push(user._id);
      }
      else if (review._id === review_id && review.users_who_dislike.includes(user._id)) {
        review.not_useful_count -= 1;
        review.isDisliked = false;
        review.users_who_dislike.splice(review.users_who_dislike.indexOf(user._id), 1);
      }
      if (review._id === review_id && review.users_who_like.includes(user._id)) {
        review.useful_count -= 1;
        review.isLiked = false;
        review.isDisliked = true;
        review.users_who_like.splice(review.users_who_like.indexOf(user._id), 1);
      }
      return review;
    });
    setReviews(newReviews);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
  }, []);
  

  return (
    <ReviewContext.Provider
      value={{
        getReviews,
        addReview,
        reviews,
        deleteReview,
        editReview,
        thumbUp,
        thumbDown,
      }}
    >
      {props.children}
    </ReviewContext.Provider>
  );
};

export default ReviewState;
