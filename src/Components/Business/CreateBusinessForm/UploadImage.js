import React from "react";
import { Form } from "react-bootstrap";

const UploadImage = ({ handleUploadImage, profile_image }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mb-3"> Upload A Image of Your Business </h2>
      <form>
        <div className="mb-3">
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={handleUploadImage(profile_image)}
          />
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
