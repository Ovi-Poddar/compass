import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "../Login/login.scss";

export default function AddReview() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        {/* <link rel="stylesheet" href="css/style.css" /> */}

        <script src="js/jquery.min.js"></script>
        <script src="js/popper.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
      </Helmet>

      {/* <section className="ftco-section"> */}
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5 mt-5">
            <h2 className="heading-section text-danger font-weight-bold">
              We Appreciate Your Review!
            </h2>
            <h6 id="fh6">Your review will help us to improve our services</h6>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
              <form id="feedback" action="#" method="POST">
                <div className="login-form-group">
                  <input
                    type="text"
                    className="form-control rounded-left  my-2"
                    placeholder="Business Name"
                    required
                  />
                </div>
                <div className="login-form-group d-flex">
                  <input
                    type="text"
                    className="form-control rounded-left my-2"
                    placeholder="Location"
                    required
                  />
                </div>
                <div className="rating">
                  <label for="photo">
                    <b>Rate Our Business</b>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </label>
                </div>
                <div
                  className="login-form-group d-flex"
                  style={{ marginBottom: "10px" }}
                >
                  <textarea
                    name="comment"
                    id="comment"
                    cols="100"
                    rows="5"
                    placeholder="Write Something"
                  ></textarea>
                </div>
                <div className="photo_selector">
                  <label for="photo">Add Photos</label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/png, image/jpeg"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}
