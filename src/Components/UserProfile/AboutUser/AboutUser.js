import React from "react";

const AboutUser = ({userDetails}) => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <label>Name</label>
        </div>
        <div className="col-md-6">
          <p>{userDetails?.user_name}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label>Email</label>
        </div>
        <div className="col-md-6">
          <p>{userDetails?.user_email}</p>
        </div>
      </div>
    </>
  );
};

export default AboutUser;
