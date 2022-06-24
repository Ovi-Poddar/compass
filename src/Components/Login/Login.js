import React from "react";
import { Helmet } from "react-helmet";

import "./login.scss"

export default function MyFooter() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="stylesheet" href="css/style.css" />
        <script src="js/jquery.min.js"></script>
        <script src="js/popper.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
      </Helmet>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section text-danger font-weight-bold">Login To Compass</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-user-o"></span>
                </div>
                <h3 className="text-center mb-4">Have an account?</h3>
                <form action="#" className="login-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-left  my-2"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="form-group d-flex">
                    <input
                      type="password"
                      className="form-control rounded-left my-2"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50">
                      <label className="checkbox-wrap checkbox-primary">
                        Remember Me
                        <input type="checkbox" checked />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="w-50 text-md-right">
                      <a href="#">Forgot Password</a>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary rounded submit p-3 px-5"
                    >
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
