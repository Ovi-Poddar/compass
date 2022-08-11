import React from "react";
import { useState } from "react";

import PostContext from "./PostContext";

const PostState = (props) => {
  const host = "http://localhost:5000";

  const postsInitial = [];
  const [posts, setPosts] = useState(postsInitial);

  // Get all Posts of this business using: GET "/api/post/getallposts".
  const getPosts = async (business_id) => {
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
    setPosts(json);
  };

  // Add a Post to a Business using: POST "/api/post/addpost/".
  const addPost = async (text, business_id) => {
    //API Call
    const response = await fetch(`${host}/api/post/addpost/${business_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ text: text }),
    });
    const addedPost = await response.json();
    setPosts([addedPost].concat(posts));
  };

  // Delete a Post using: DELETE "/api/post/deletepost/".
  const deletePost = async (post_id) => {
    console.log(post_id);
    //API Call
    const response = await fetch(`${host}/api/post/deletepost/${post_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log("hello");

    const newPosts = posts.filter((post) => {
      return post._id !== post_id;
    });
    setPosts(newPosts);
  };

  // Update a Post using: PUT "/api/post/updatepost/".
  const editPost = async (post_id, text) => {
    //API Call
    const response = await fetch(`${host}/api/post/updatepost/${post_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ text: text }),
    });
    const json = await response.json();

    let newPosts = JSON.parse(JSON.stringify(posts));

    newPosts.forEach((post) => {
      if (post._id === post_id) {
        post.text = text;
      }
    });

    setPosts(newPosts);
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts,
        addPost,
        deletePost,
        editPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
