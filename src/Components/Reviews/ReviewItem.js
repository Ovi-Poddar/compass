import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import ReplyIcon from "@mui/icons-material/Reply";

import Card from "react-bootstrap/Card";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoodIcon from "@mui/icons-material/Mood";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Modal from "react-bootstrap/Modal";

import { FaStar } from "react-icons/fa";

import UserContext from "../../Context/Users/UserContext";
import ReviewContext from "../../Context/Review/ReviewContext";

import moment from "moment";

function ReviewItem(props) {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const reviewTooltip = ["Bad", "Poor", "Ok", "Good", "Excellent"];
  const stars = Array(5).fill(0);

  const userContext = useContext(UserContext);
  const { user } = userContext;
  const reviewContext = useContext(ReviewContext);
  const { deleteReview, editReview } = reviewContext;

  // for the edit review modal
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [editedReview, setEditedReview] = useState({
    id: "",
    etext: "",
    estars: 0,
  });

  //for editing review stars
  const [currentStarValue, setCurrentStarValue] = useState(props.review.stars);
  const [hoverStarValue, setHoverStarValue] = useState(undefined);
  const handleClickStars = (value) => {
    setCurrentStarValue(value);
  };
  const handleMouseOverStars = (newHoverValue) => {
    setHoverStarValue(newHoverValue);
  };
  const handleMouseLeaveStars = () => {
    setHoverStarValue(undefined);
  };

  //for editing review text
  const updateReview = () => {
    handleShowEdit();
    setEditedReview({
      id: props.review._id,
      etext: props.review.text,
      estars: props.review.stars,
    });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    editReview(editedReview.id, editedReview.etext, currentStarValue);
    handleCloseEdit();
    props.showAlert("Review updated successfully!", "success");
  };

  const onChange = (e) => {
    setEditedReview({ ...editedReview, [e.target.name]: e.target.value });
  };

  // for the delete review modal
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleConfirmDelete = () => {
    setShowDelete(false);
    deleteReview(props.review._id);
  };
  const handleShowDelete = () => setShowDelete(true);

  return (
    <>
      <div className="d-flex justify-content-start">
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
            {props.review.user_id.user_name}
          </h6>

          {stars.map((_, index) => {
            return (
              <div className="d-inline" key={props.review._id + index}>
                <FaStar
                  size={16}
                  color={
                    props.review.stars > index ? colors.orange : colors.grey
                  }
                  style={{
                    marginRight: 0,
                  }}
                />
              </div>
            );
          })}

          {props.review.user_id._id == user._id && (
            <div className="d-inline" style={{ marginLeft: "18rem" }}>
              <OverlayTrigger overlay={<Tooltip id="EditReview">Edit</Tooltip>}>
                <a
                  role="button"
                  className="ml-4 text-primary"
                  onClick={updateReview}
                >
                  <EditIcon style={{ color: "#1565C0" }} />
                </a>
              </OverlayTrigger>
              <OverlayTrigger
                overlay={<Tooltip id="DeleteReview">Delete</Tooltip>}
              >
                <a
                  role="button"
                  className="ml-1 text-primary"
                  onClick={handleShowDelete}
                >
                  <DeleteIcon style={{ color: "#E00707" }} />
                </a>
              </OverlayTrigger>
            </div>
          )}
          <div className="d-flex align-items-center mb-3">
            <span class="badge rounded-pill bg-danger d-inline">
              {moment(props.review.creation_date).calendar()}
            </span>

            {/* Modal for editing review */}
            <Modal show={showEdit} onHide={handleCloseEdit}>
              <Modal.Header closeButton>
                <Modal.Title className = "text-primary"> Edit Your Review</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <div className="d-flex justify-content-center mb-2"> 
                {stars.map((_, index) => {
                  return (
                    <OverlayTrigger
                      overlay={
                        <Tooltip id={reviewTooltip[index]}>
                          {reviewTooltip[index]}
                        </Tooltip>
                      }
                      key={index}
                    >
                      <span className="d-inline-block">
                        <FaStar
                          size={24}
                          onClick={() => handleClickStars(index + 1)}
                          onMouseOver={() => handleMouseOverStars(index + 1)}
                          onMouseLeave={handleMouseLeaveStars}
                          color={
                            (hoverStarValue || currentStarValue) > index
                              ? colors.orange
                              : colors.grey
                          }
                          style={{
                            marginRight: 10,
                            cursor: "pointer",
                          }}
                        />
                      </span>
                    </OverlayTrigger>
                  );
                })}</div>
                <Form>
                  <Form.Group className="mb-3">
                    {/* <Form.Label>Your Experience</Form.Label> */}
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={editedReview.etext}
                      id="etext"
                      name="etext"
                      onChange={onChange}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className = "d-flex">
                <Button variant="danger" onClick={handleCloseEdit} className = "mr-auto" >
                  Cancel
                </Button>
                <Button variant="success" onClick={handleSaveEdit}  className = "ml-auto" >
                  Save
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Modal for deleting review */}
            <Modal
              show={showDelete}
              onHide={handleCloseDelete}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Confirm? </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are You Sure You Want To Delete This Review?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDelete}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={handleConfirmDelete}>
                  Yes{" "}
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <p className="mb-2 text-dark">{props.review.text}</p>

          <OverlayTrigger overlay={<Tooltip id="tooltip-like">Like!</Tooltip>}>
            <span className="d-inline-block">
              <a role="button" className="mr-2 text-primary">
                <ThumbUpIcon />
              </a>
            </span>
          </OverlayTrigger>

          <OverlayTrigger
            overlay={<Tooltip id="tooltip-funny">Funny!</Tooltip>}
          >
            <span className="d-inline-block">
              <a
                role="button "
                className="mr-2 text-primary"
                style={{ cursor: "pointer" }}
              >
                <MoodIcon />
              </a>
            </span>
          </OverlayTrigger>
        </div>
      </div>
      <hr className="mt-2" />
    </>
  );
}

export default ReviewItem;
