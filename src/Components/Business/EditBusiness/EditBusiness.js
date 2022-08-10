import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBusiness = () => {
  const navigate = useNavigate();
  const { business_id } = useParams();
  const [profileImage, setprofileImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setprofileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_image", profileImage);
    formData.append("business_id", business_id);
    console.log(formData);
    const response = await fetch(
      "http://localhost:5000/api/business/uploadprofilepic",
      {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
        body: formData,
      }
    );
    const json = await response.json();
    console.log(json);
    navigate(`/business/${business_id}`);
  };

  return (
    <>
      {/* upload image form */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Upload Image</h5>
                <form onSubmit={handleSubmit} encType="multipart/form-data" >
                  <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                      name="profile_image"  onChange={handleImageChange}
                    />
                  </div>
                  <button
                    type="submit"
                   
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBusiness;
