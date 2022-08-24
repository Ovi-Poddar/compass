import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";

const EditProfileForm = () => {
  const navigate = useNavigate();
  const { profile_id } = useParams();

  const [data, setData] = useState([]);

  const getUser = async () => {
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
    console.log(json);
    setData(json);
  };

  useEffect(() => {
    getUser();
  }, []); // <- add empty brackets here

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_id", data._id);
    formData.append("user_name", data.user_name);
    formData.append("user_email", data.user_email);
    // formData.append("user_name", user_name);
    // formData.append("user_email", user_email);
    console.log("data", formData.get("profile_id"));
    console.log("data", formData.get("user_name"));
    console.log("data", formData.get("user_email"));
    const name = formData.get("user_name");
    const email = formData.get("user_email");

    const response = await fetch(
      `http://localhost:5000/api/profile/updateprofile/${profile_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token": localStorage.getItem("token"),
          user_name: name,
          user_email: email,
        },
        body: {
          user_name: name,
          user_email: email,
        },
      }
    );
    // console.log("name", name);
    const json = await response.json();
    // res = JSON.stringify(json);
    console.log(json);
    // showAlert("Query added successfully!", "success");
    console.log("data", json.Success);
    if (json.Success) navigate(`/profile/${profile_id}`);
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    navigate(`/profile/${profile_id}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{
          marginTop: "150px",
          marginLeft: "500px",
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            name="user_name"
            className="form-control"
            id="user_name"
            value={data.user_name}
            style={{ width: "500px" }}
            onChange={(e) => setData({ ...data, user_name: e.target.value })}
          />
        </div>
        <div className="form-group" style={{ marginTop: "50px" }}>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="user_email"
            aria-describedby="emailHelp"
            value={data.user_email}
            style={{ width: "500px" }}
            onChange={(e) => setData({ ...data, user_email: e.target.value })}
          />
        </div>

        <Button
          className="btn btn-danger"
          onClick={handleCancel}
          style={{ marginTop: "50px", marginLeft: "80px" }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="btn btn-success"
          // onClick={handleSubmit}
          style={{ marginTop: "50px", marginLeft: "150px" }}
        >
          Update Info
        </Button>
      </form>
    </>
  );
};

export default EditProfileForm;
