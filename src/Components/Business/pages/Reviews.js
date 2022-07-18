import React from "react";
import ReviewItem from "../../Reviews/ReviewItem";
import SubmitReview from "../../Reviews/SubmitReview";
import SideBar from "../Sidebar/Sidebar";

export const Reviews = () => {
  return (
    <>
      <SideBar>
        <div class="container">
          <div className="row">
            <div className="col-7"><ReviewItem /></div>
            <div className="col-3"><SubmitReview /></div>
          </div>
        </div>

        
        
      </SideBar>
    </>
  );
};
