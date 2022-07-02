import React from "react";
import { Helmet } from "react-helmet";

import "./CompassFooter.scss";

import { Link } from "react-router-dom";

export default function CompassFooter() {
  return (
    <div className="application">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/ionicons.min.css" />
        <link rel="stylesheet" href="css/style.css" />

        <script src="js/jquery.min.js"></script>
        <script src="js/popper.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
      </Helmet>

      <footer className="footer-08">
        <div className="container-fluid px-lg-4">
          <div className="row">
            <div className="col-md-9 py-5">
              <div className="row">
                <div className="col-md-4 mb-md-0 mb-4">
                  <h2 className="footer-heading">About us</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <ul className="ftco-footer-social p-0">
                    <li className="ftco-animate">
                      <a className="footer-a"
                        href="/"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Twitter"
                      >
                       <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a className="footer-a"
                        href="/"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Facebook"
                      >
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a className="footer-a"
                        href="/"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Instagram"
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-9">
                      <div className="row">
                        <div className="col-md-4 mb-md-0 mb-4">
                          <h2 className="footer-heading">Discover</h2>
                          <ul className="list-unstyled">
                            <li>
                              <a  href="/" className="py-1 d-block footer-a">
                                Buy &amp; Sell
                              </a>
                            </li>
                            <li>
                              <a href="/" className="py-1 d-block footer-a">
                                Merchant
                              </a>
                            </li>
                            <li>
                              <a href="/" className="py-1 d-block footer-a">
                                Giving back
                              </a>
                            </li>
                            <li>
                              <a  href="/" className="py-1 d-block footer-a">
                                Help &amp; Support
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                          <h2 className="footer-heading">About</h2>
                          <ul className="list-unstyled">
                            <li>
                              <a  href="/" className="py-1 d-block   footer-a">
                                Staff
                              </a>
                            </li>
                            <li>
                              <a  href="/" className="py-1 d-block  footer-a">
                                Team
                              </a>
                            </li>
                            <li>
                              <a  href="/" className="py-1 d-block  footer-a">
                                Careers
                              </a>
                            </li>
                            <li>
                              <a  href="/" className="py-1 d-block footer-a">
                                Blog
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4">
                          <h2 className="footer-heading">Resources</h2>
                          <ul className="list-unstyled">
                            <li>
                              <a  href="/" className="py-1 d-block" footer-a>
                                Security
                              </a>
                            </li>
                            <li>
                              <a  href="/" className="py-1 d-block" footer-a>
                                Global
                              </a>
                            </li>
                            <li>
                              <a  href="/" className="py-1 d-block" footer-a>
                                Charts
                              </a>
                            </li>
                            <li>
                              <a href="/" className="py-1 d-block" footer-a>
                                Privacy
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-md-5">
                <div className="col-md-12">
                  <p className="copyright">
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="ion-ios-heart" aria-hidden="true"></i> by{" "}
                    <Link to="/" >
                      Compass.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-2 py-md-5 py-4 aside-stretch-right pl-lg-5">
              <h2 className="footer-heading footer-heading-white">Contact us</h2>
              <form action="#" className="contact-form">
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group mb-2">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group mb-5">
                  <button type="submit" className="form-control submit px-3">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
