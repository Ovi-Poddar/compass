import React from "react";

import "./styles.css";

import { Rating } from "@mui/material";

const UserRating = () => {
  return (
    <div>
      <h1 class="heading my-4">User Rating</h1>
      <Rating name="size-large" defaultValue={2} readOnly size="large" />
      <p>4.1 average based on 254 reviews.</p>
    </div>
  );
};

export default UserRating;
