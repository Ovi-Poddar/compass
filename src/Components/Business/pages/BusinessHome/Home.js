import React, { useEffect, useState } from "react";

import "./home.css";
import { useParams } from "react-router-dom";

import CollectionsIcon from "@mui/icons-material/Collections";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";

import PlaceIcon from "@mui/icons-material/Place";

import Spinner from "react-bootstrap/Spinner";

const Home = () => {
  const { business_id } = useParams();

  const [business, setBusiness] = useState(null);

  //fetch business details
  const fetchBusinessDetails = async () => {
    const response = await fetch(
      `http://localhost:5000/api/business/getbusiness/${business_id}`,
      {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setBusiness(json);
    console.log(json);
  };

  useEffect(() => {
    fetchBusinessDetails();
  }, []);


  const [profileImageLoaded, setprofileImageLoaded] = useState(false);
  const onProfileImageLoaded = () => {
    setprofileImageLoaded(true);
  };

  return (
    <div>
      <div className="">
        <div className="row py-4 px-0">
          <div className="col mx-auto">
            {/* <!-- Profile widget --> */}
            <div className="bg-white shadow rounded overflow-hidden">
              <div className="px-4 pt-0 pb-4 cover">
                <div className="media align-items-end profile-header">
                  <div className="profile mr-3">
                    <div style={{ width: "200px", height: "150px"}} className="bg-white">
                        <img
                          src={business?.profile_image}
                          alt=""
                          width="auto"
                          height="auto"
                          className="rounded mb-2 img-thumbnail"
                          onLoad={onProfileImageLoaded}
                        />
                        {!profileImageLoaded && ( 
                          <div className="d-flex justify-content-center p-4" role="status">
                          <Spinner animation="border" variant="danger" />
                          </div>
                          
                        )}
                      
                    </div>
                    <Link
                      to={`/business/edit/${business_id}`}
                      className="btn btn-dark btn-sm btn-block"
                    >
                      Edit profile
                    </Link>
                  </div>
                  <div className="media-body mb-5 text-white">
                    <h4 className="mt-0 mb-0"> {business?.business_name} </h4>
                    {/* <p className="small mb-4 text-warning"> */}
                     <p> <PlaceIcon color="warning" /> {business?.address}{", "}{business?.city}{", "}{business?.district} </p>
                  </div>
                </div>
              </div>

              <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mx-4">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {business?.images.length}
                    </h5>
                    <small className="text-muted">
                      {" "}
                      {/* <i className="fa fa-picture-o mr-1"></i>  */}
                      <CollectionsIcon /> Photos
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <h5 className="font-weight-bold mb-0 d-block">
                      {business?.review_count}{" "}
                    </h5>
                    <small className="text-muted">
                      {" "}
                      {/* <i className="fa fa-user-circle-o mr-1"></i> */}
                      <GroupIcon /> Followers
                    </small>
                  </li>
                </ul>
              </div>

              <div className="py-4 px-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="mb-0">Recent photos</h5>
                  <a href="#" className="btn btn-link text-muted">
                    Show all
                  </a>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-2 pr-lg-1">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-profile/img-3.jpg"
                      alt=""
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                  <div className="col-lg-6 mb-2 pl-lg-1">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-profile/img-4.jpg"
                      alt=""
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                  <div className="col-lg-6 pr-lg-1 mb-2">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-profile/img-5.jpg"
                      alt=""
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                  <div className="col-lg-6 pl-lg-1">
                    <img
                      src="https://bootstrapious.com/i/snippets/sn-profile/img-6.jpg"
                      alt=""
                      className="img-fluid rounded shadow-sm"
                    />
                  </div>
                </div>
                <div className="py-4">
                  <h5 className="mb-3">Recent posts</h5>
                  <div className="p-4 bg-light rounded shadow-sm">
                    <p className="font-italic mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <ul className="list-inline small text-muted mt-3 mb-0">
                      <li className="list-inline-item">
                        <i className="fa fa-comment-o mr-2"></i>12 Comments
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-heart-o mr-2"></i>200 Likes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End profile widget --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
