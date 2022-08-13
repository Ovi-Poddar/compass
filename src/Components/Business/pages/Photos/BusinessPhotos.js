// import SideBar from "./Sidebar/Sidebar";

import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";

import Sidebar from "../../Sidebar/Sidebar";

import BusinessHomeState from "../../../../Context/BusinessHome/BusinessHomeState";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PhotoItem from "./PhotoItem";

// import "./Sidebar/styles.css";

function BusinessPhotos() {
  const { business_id } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const response = await fetch(
        `http://localhost:5000/api/business/getphotos/${business_id}`
      );
      const json = await response.json();
      setPhotos(JSON.parse(JSON.stringify(json)));
    };
    getPhotos();
  }, []);

  return (
    <>
      <BusinessHomeState business_id={business_id}>
        <div className="wrapper">
          <Sidebar />
          <div className="main_content">
            {/* <div className="info"> */}
            <div className="container ">
              <div className="main_content_body">
                {/* Add Your Main Content Codes Here */}
                {photos.length > 0 ?  <div className="row">
                  {/* conditional rendering display all the photos */}
                  {photos.map((image) => {
                    return (
                      <PhotoItem
                        key={image} image={image}
                     />
                    );
                  })}
                </div> : <div className="row"> <h1 >No Photos Uploaded yet</h1> </div>}
              </div>
            </div>
          </div>
        </div>
      </BusinessHomeState>
    </>
  );
}

export default BusinessPhotos;
