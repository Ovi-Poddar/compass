import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function SubmitReview() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

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
  });

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    console.log(review);

    const response = await fetch(
      "http://localhost:5000/api/review/addreview/62d5301c3687e28d51bd22ed",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          text: review.text,
        }),
      }
    );
    const json = await response.json();
    console.log(json);

    // props.showAlert("Your business created Successfully", "success");

    setReview({
      text: "",
    });

    //navigate("/reviews");
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
                  <FaStar
                    key={index}
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
                );
              })}
            </div>

            <Form >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={styles.textarea}
                  placeholder="What's your experience?"
                  name="text" value={review.text} onChange={onChange}
                  required
                />
              </Form.Group>
            </Form>
            {/* <button style={styles.button}>Submit</button> */}
          </div>
          <Button  disabled={review.text.length<3} variant="danger" type="submit" onClick={handleSubmitReview}>Submit</Button>
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
