import React, { useState, useEffect, useContext } from "react";

import "./profile.css";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import UserContext from "../../Context/Users/UserContext";

import { useParams } from "react-router-dom";
import UserReviews from "./UserReviews/UserReviews";
import UserProfileState from "../../Context/UserProfile/UserProfileState";
import AboutUser from "./AboutUser/AboutUser";

const Profile = () => {
  const { profile_id } = useParams();
  console.log("profile_id", profile_id);
  const [userDetails, setUserDetails] = useState(null);
  const { user, getUser } = useContext(UserContext);

  //fetch user details
  useEffect(() => {
    //use async await to fetch user details
    let isMounted = true;
    async function fetchUser() {
      const response = await fetch(
        `http://localhost:5000/api/profile/getprofile/${profile_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (isMounted) {
        setUserDetails(json);
        console.log(json);
      }
    }
    fetchUser();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <UserProfileState>
      <div className="container">
        <div className=" emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-3">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{userDetails ? userDetails.user_name : null}</h5>
                  {/* <h6>Web Developer and Designer</h6> */}
                  {/* <p className="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p> */}

                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="about-tab"
                        data-toggle="tab"
                        href="#about"
                        role="tab"
                        aria-controls="about"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="reviews-tab"
                        data-toggle="tab"
                        href="#reviews"
                        role="tab"
                        aria-controls="reviews"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="queries-tab"
                        data-toggle="tab"
                        href="#queries"
                        role="tab"
                        aria-controls="queries"
                        aria-selected="false"
                      >
                        Queries
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="profile-work"><ScoreBoard /></div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="about"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                  >
                    <AboutUser userDetails={userDetails} />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    <UserReviews profile_id={profile_id} />
                    {/* <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>*/}
                  </div>
                  <div
                    className="tab-pane fade show"
                    id="queries"
                    role="tabpanel"
                    aria-labelledby="queries-tab"
                  >
                    queries
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </UserProfileState>
  );
};

export default Profile;
