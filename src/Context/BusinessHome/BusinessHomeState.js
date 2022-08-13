import React from "react";
import { useState } from "react";

import BusinessHomeContext from "./BusinessHomeContext";

const BusinessHomeState = (props) => {
  const host = "http://localhost:5000";

  const imagesInitial = [];
  const [images, setImages] = useState(imagesInitial);

 //Get all the Images from the database
  const getImages = async (business_id) => {
    //API Call
    const response = await fetch(
      `${host}/api/post/getallposts/${business_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setImages(json);
  };

  // Add Images to a Business using: POST "/api/business/uploadphotos".
  const addImages = async (business_id, images, setIsUploading) => {
    const formData = new FormData();
    for (let i = 0; i < images.length; i += 1) {
      formData.append('images[]', images[i]);
   }
    formData.append("business_id", business_id);
    // console.log(formData.getAll('images[]'));
    formData.append("folder", `${business_id}`);
    //API Call
    const response = await fetch(
      "http://localhost:5000/api/business/uploadphotos",
      {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
        body: formData,
      }
    );
    const json = await response.json();
    setIsUploading(false);
    console.log(json);
  };

  // // Delete a Image using: DELETE "/api/post/deletepost/".
  // const deletePost = async (post_id) => {
  //   console.log(post_id);
  //   //API Call
  //   const response = await fetch(`${host}/api/post/deletepost/${post_id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem("token"),
  //     },
  //   });
  //   const json = await response.json();
  //   console.log("hello");

  //   const newPosts = posts.filter((post) => {
  //     return post._id !== post_id;
  //   });
  //   setPosts(newPosts);
  // };

  return (
    <BusinessHomeContext.Provider
      value={{
        images,
        getImages,
        addImages,
      }}
    >
      {props.children}
    </BusinessHomeContext.Provider>
  );
};

export default BusinessHomeState;
