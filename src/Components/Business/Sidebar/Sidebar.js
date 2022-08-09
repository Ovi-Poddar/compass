import React from "react";

import { useParams, Link } from "react-router-dom";

import "./styles.css";

const Sidebar = () => {
  let {business_id} = useParams();
  return (
    <div className="sidebar my-4">
      <h2 style={{ textTransform: "none" }}>Menu</h2>
      <ul>
        <li>
          <Link to={`/business/${business_id}/`}>
            <i className="fas fa-home"></i>Home
          </Link>
        </li>
        <li>
          <Link to={`/reviews/${business_id}`}>
            <i className="fas fa-user"></i>Reviews
          </Link>
        </li>
        <li>
          <Link to={`/queries/${business_id}`}>
            <i className="fas fa-user"></i>Queries
          </Link>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-address-card"></i>About
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-project-diagram"></i>portfolio
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-blog"></i>Blogs
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-address-book"></i>Contact
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-map-pin"></i>Map
          </a>
        </li>
      </ul>
      <div className="social_media">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
