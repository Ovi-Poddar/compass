import React, { useState, useContext } from "react";
import moment from "moment";


const UserQueryAnswerItem = ({ answer }) => {
    return (
        <>
          <div className="d-flex justify-content-start ">
            <img
              className="rounded-circle shadow-1-strong me-3"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
              alt="avatar"
              width="60"
              height="60"
            />
            <div>
              <h6
                className="fw-bold mb-1 mr-3 d-inline"
                style={{ color: "#027A97" }}
              >
                {answer?.answerer_id.user_name}
              </h6>
  
              <div className="d-flex align-items-center mb-3">
                <span class="badge rounded-pill bg-danger d-inline">
                  {moment(answer?.creation_date).calendar()}
                </span>
              </div>
              <p className="mb-2 text-dark ">{answer?.text}</p>
            </div>
          </div>
          <hr className="mt-2" />
        </>
      );
}

export default UserQueryAnswerItem;