import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";

import ReviewItem from "./ReviewItem";
import SubmitReview from "./SubmitReview";
import Sidebar from "../../Sidebar/Sidebar";

import ReviewContext from "../../../../Context/Review/ReviewContext";

export const Reviews = (props) => {
  let { business_id } = useParams();

  const context = useContext(ReviewContext);
  const { reviews, getReviews } = context;

  useEffect(() => {
    getReviews(business_id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="wrapper">
        <Sidebar/>
        <div className="main_content">
          <div className="container ">
            <div className="main_content_body">
              {/* Add Your Main Content Codes Here */}
              <div className="d-flex mr-4 ">
                <div className=" my-1 py-3 " style={{ width: "53rem" }}>
                  <div className="row d-flex justify-content-start ">
                    <div className="col-md-12 col-lg-10  ">
                      <Card className="" style={{}}>
                        <Card.Body className="p-4">
                          <h4 className="mb-4 text-danger">
                            Recent Reviews ({reviews.length})
                          </h4>
                          {reviews.map((review) => {
                            return (
                              <ReviewItem
                                key={review._id}
                                review={review}
                                business_id={business_id}
                                showAlert={props.showAlert}
                              />
                            );
                          })}
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
                <div
                  className="justify-content-end"
                  style={{
                    backgrounColor: "lightgreen",
                    position: "fixed",
                    top: "0",
                    bottom: "0",
                    right: "0",
                    width: "40%",
                    marginTop: "120px",
                    marginLeft: "60px",
                  }}
                >
                  <SubmitReview
                    showAlert={props.showAlert}
                    business_id={business_id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
