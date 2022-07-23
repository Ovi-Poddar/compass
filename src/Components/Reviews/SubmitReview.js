import React, { useState, useContext } from "react";

import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import ReviewContext from "../../Context/Review/ReviewContext";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function SubmitReview(props) {
  const context = useContext(ReviewContext);
  const { addReview } = context;

  const { showAlert, business_id } = props;

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const reviewTooltip = ["Bad", "Poor", "OK", "Good", "Excellent"];

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const [review, setReview] = useState({
    text: "",
    rating: 0,
  });

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    //     body: JSON.stringify({
    //       text: review.text,
    //       rating : currentValue,
    //     }),
    addReview(review.text, currentValue, business_id);
    showAlert("Review submitted successfully!", "success");

    setReview({
      text: "",
      rating: 0,
    });
    setCurrentValue(0);
  };

  const onChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Card className="text-center mt-4 shadow-lg" style={{ width: "30rem" }}>
        <Card.Body>
          <div style={styles.container}>
            <h2 className="text-danger"> Write A Review </h2>
            <div style={styles.stars}>
              {stars.map((_, index) => {
                return (
                  <OverlayTrigger
                    overlay={
                      <Tooltip id={reviewTooltip[index]}>
                        {" "}
                        {reviewTooltip[index]}{" "}
                      </Tooltip>
                    }
                    key={index}
                  >
                    <span className="d-inline-block">
                      <FaStar
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={
                          (hoverValue || currentValue) > index
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
              })}
            </div>

            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={styles.textarea}
                  placeholder="What's your experience?"
                  name="text"
                  value={review.text}
                  onChange={onChange}
                  required
                />
              </Form.Group>
            </Form>
            {/* <button style={styles.button}>Submit</button> */}
          </div>
          <Button
            disabled={review.text.length < 3}
            variant="danger"
            type="submit"
            onClick={handleSubmitReview}
          >
            Submit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 400,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default SubmitReview;
