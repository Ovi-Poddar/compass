import React from "react";

import Rating from "@mui/material/Rating";

const TopReviews = ({ topReviews }) => {
  return (
    <>
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-xl-8 text-center">
          <h3 class="mb-4">Top Reviews </h3>
          <p class="mb-4 pb-2 mb-md-5 pb-md-0">
            
          </p>
        </div>
      </div>

      <div class="row text-center">
        {/* conditional rendering  */}
        {topReviews.map((review, idx) => {
          return (
            <div class="col-md-4 mb-5 mb-md-0" key={idx}>
              <div class="d-flex justify-content-center mb-4">
                <img
                  src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                  class="rounded-circle shadow-1-strong"
                  width="150"
                  height="150"
                />
              </div>
              <h5 class="mb-3">{review.user_id.user_name}</h5>
              {/* <h6 class="text-primary mb-3">Web Developer</h6> */}
              <p class="px-xl-3">
                <i class="fas fa-quote-left pe-2"></i>
                {review.text}
              </p>
              <div class="list-unstyled d-flex justify-content-center mb-0">
                <Rating name="read-only" value={review.stars} readOnly />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopReviews;
