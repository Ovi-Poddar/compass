import React, { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ReplyIcon from "@mui/icons-material/Reply";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import UserContext from "../../../../Context/Users/UserContext";
import PostContext from "../../../../Context/Post/PostContext";

function PostItem(props) {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const postContext = useContext(PostContext);
  const { deletePost, editPost } = postContext;

  const [showEditPost, setShowEditPost] = useState(false);
  const toggleEditPost = () => setShowEditPost(!showEditPost);

  const [editedPost, setEditedPost] = useState({
    id: "",
    etext: "",
  });

  const updatePost = () => {
    toggleEditPost();
    setEditedPost({
      id: props.post._id,
      etext: props.post.text,
    });
  };

  const handleSaveEditPost = (e) => {
    e.preventDefault();
    editPost(editedPost.id, editedPost.etext);
    toggleEditPost();
    props.showAlert("Post updated successfully!", "success");
  };

  const handleChangeEditPost = (e) => {
    setEditedPost({
      ...editedPost,
      [e.target.name]: e.target.value,
    });
  };

  const [showDeletePost, setShowDeletePost] = useState(false);
  const toggleDeletePost = () => setShowDeletePost(!showDeletePost);

  const handleDeletePost = (e) => {
    e.preventDefault();
    deletePost(props.post._id);
    toggleDeletePost();
    props.showAlert("Post deleted successfully!", "success");
  };

  if (props.post != null) {
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
              {props.post?.user_id.user_name}
            </h6>

            {(props.post?.user_id._id === user?._id) ? 
              <>
                <div className="d-inline" style={{ marginLeft: "20rem" }}>
                  <Button
                    className="mr-3"
                    variant="outline-primary"
                    onClick={updatePost}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    className="mr-3"
                    variant="outline-danger"
                    onClick={toggleDeletePost}
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </>
              :
              <>
              <div className="d-inline" style={{ marginLeft: "20rem" }}>
                <Button
                  className="mr-3"
                  variant="outline-primary"
                  onClick={updatePost}
                  disabled = {true}
                >
                  <EditIcon />
                </Button>
                <Button
                  className="mr-3"
                  variant="outline-danger"
                  onClick={toggleDeletePost}
                  disabled  = {true}
                >
                  <DeleteIcon />
                </Button>
              </div>
            </>
            }

            <div className="d-flex align-items-center mb-3">
              <span class="badge rounded-pill bg-danger d-inline">
                {moment(props.post?.creation_date).calendar()}
              </span>
            </div>
            <p className="mb-2 text-dark">{props.post?.text}</p>

            {/* Modal for editing post */}
            <Modal
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={showEditPost}
              onHide={toggleEditPost}
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-primary">
                  Edit Your Post
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={editedPost.etext}
                      id="etext"
                      name="etext"
                      onChange={handleChangeEditPost}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="d-flex">
                <Button
                  variant="danger"
                  onClick={toggleEditPost}
                  className="mr-auto"
                >
                  Cancel
                </Button>
                <Button
                  variant="success"
                  onClick={handleSaveEditPost}
                  className="ml-auto"
                >
                  Save
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Modal for deleting post */}
            <Modal
              show={showDeletePost}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              onHide={toggleDeletePost}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Confirm? </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are You Sure You Want To Delete This Post?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={toggleDeletePost}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={handleDeletePost}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <hr className="mt-2" />
      </>
    );
  }
}

export default PostItem;
