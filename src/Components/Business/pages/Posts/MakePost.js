import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { useContext, useState, useEffect } from "react";

import PostContext from "../../../../Context/Post/PostContext";
import UserContext from "../../../../Context/Users/UserContext";

function MakePost(props) {
  const postContext = useContext(PostContext);
  const { addPost, posts } = postContext;

  const userContext = useContext(UserContext);
  const { user } = userContext;

  const { showAlert, business_id } = props;

  const [owner,setOwner] = useState("");

  const getowner = async () => {
    const response = await fetch(
      `http://localhost:5000/api/business/getowner/${business_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );

    const json = await response.json();
    setOwner(json);
  };

  getowner();

  const [post, setPost] = useState({
    text: "",
  });

  const [showAddPost, setShowAddPost] = useState(false);
  const handleShowAddPost = () => setShowAddPost(!showAddPost);

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    addPost(post.text, business_id);
    setPost({ text: "" });
    handleShowAddPost();
    showAlert("Post added successfully!", "success");
  };

  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

    return (
      <>
        <div className="">
          <div
            style={{
              marginLeft: "0px",
              position: "fixed",
              zIndex: "1",
              marginBottom: "20px",
            }}
          >
            <div
              className="d-flex justify-content-start"
              style={{ marginLeft: "25rem" }}
            >
              <h1 className="fw-bold text-danger">See Our Recent Updates</h1>
            </div>
            {String(owner) === String(user?._id) && (
              <Button
                variant="danger"
                onClick={handleShowAddPost}
                style={{ marginLeft: "35rem" }}
                disabled = {localStorage.getItem("token") === null}
              >
                Make a Post
              </Button>
            )}
            <hr className="mt-2" style={{ width: "78rem" }} />
          </div>
          <div className="row">
            <div className="d-flex justify-content-start pt-3 pb-2">
              <div className="d-flex align-items-center mb-3">
                <Modal
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  backdrop="static"
                  keyboard={false}
                  show={showAddPost}
                  onHide={handleShowAddPost}
                >
                  <Modal.Header closeButton>
                  <Modal.Title className="text-primary">
                    Add Your Post
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={post.text}
                        placeholder="Add your Post here"
                        id="text"
                        name="text"
                        onChange={onChange}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer className="d-flex">
                  <Button
                    variant="danger"
                    onClick={handleShowAddPost}
                    className="mr-auto"
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={post.text.length < 3}
                    variant="success"
                    onClick={handleSubmitPost}
                    className="ml-auto"
                  >
                    Add Post
                  </Button>
                </Modal.Footer>
              </Modal>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}

export default MakePost;
