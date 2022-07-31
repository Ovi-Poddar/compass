import React from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hours() {
  return (
    <>
      <div
        className="tab_container my-4"
        style={{ float: "left", marginLeft: "100px" }}
      >
        <div className="home" style={{ marginBottom: "5px" }}>
          <Link to="/businesshome">
            <Button
              className="me-2"
              role="button"
              style={{ background: "red", color: "white", width: "180px" }}
            >
              <b>Home</b>
            </Button>
          </Link>
        </div>
        <div className="updates" style={{ marginBottom: "5px" }}>
          <Link to="/businessupdates">
            <Button
              className="me-2"
              role="button"
              style={{ background: "red", color: "white", width: "180px" }}
            >
              <b>Updates</b>
            </Button>
          </Link>
        </div>
        <div className="location_hours" style={{ marginBottom: "5px" }}>
          <Link to="#">
            <Button
              className="me-2"
              role="button"
              style={{ background: "white", color: "blue", width: "180px" }}
            >
              <b>Location & Hours</b>
            </Button>
          </Link>
        </div>
        <div className="amenities" style={{ marginBottom: "5px" }}>
          <Link to="/businessamenities">
            <Button
              className="me-2"
              role="button"
              style={{ background: "red", color: "white", width: "180px" }}
            >
              <b>Amenities</b>
            </Button>
          </Link>
        </div>
        <div className="offers" style={{ marginBottom: "5px" }}>
          <Link to="/businessoffers">
            <Button
              className="me-2"
              role="button"
              style={{ background: "red", color: "white", width: "180px" }}
            >
              <b>Offers</b>
            </Button>
          </Link>
        </div>
        <div className="query" style={{ marginBottom: "5px" }}>
          <Link to="/businessquery">
            <Button
              className="me-2"
              role="button"
              style={{ background: "red", color: "white", width: "180px" }}
            >
              <b>Ask The Community</b>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
