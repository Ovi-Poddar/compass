import React, { useState } from "react";
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

// import "./ReviewItem.css";

function ReviewItem(props) {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const stars = Array(5).fill(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
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
          <h6 className="fw-bold mb-1 mr-3 d-inline">
            {props.review.user_id.user_name}{" "}
          </h6>

          {stars.map((_, index) => {
            return (
              <div className = "cotainer d-inline"  key={props.review._id + index}> 
              <FaStar
                size={17}
                color={props.review.stars > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 2,
                }}
              /> </div>
            );
          })}
          <div className="d-inline" style = {{marginLeft : "18rem"}}>
            <a role="button" className="mx-2 text-primary" onClick={handleShow}>
              <EditIcon />
            </a>
            <a
              role="button"
              className="text-primary"
              onClick={handleShowDelete}
            >
              <DeleteIcon />
            </a>
          </div>
          <div className="d-flex align-items-center mb-3">
            <span class="badge rounded-pill bg-danger d-inline">
              {" "}
              {props.review.creation_date}{" "}
            </span>

            {/* Modal for editing review */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
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
                <Modal.Title>Confirm ? </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are You Sure You Want To Delete This Review?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDelete}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={handleCloseDelete}>
                  {" "}
                  Yes{" "}
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <p className="mb-0">{props.review.text}</p>

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
