import React, { useState } from "react";

import Spinner from "react-bootstrap/Spinner";

const PhotoItem = ({ image }) => {
  const [imageLoaded, setimageLoaded] = useState(false);
  const onImageLoaded = () => {
    setimageLoaded(true);
  };

  return (
    <>
      <div
        className="col-lg-6 my-3 mr-3 pr-lg-1 "
        style={{ width: "400px", height: "400px" }}
      >
        <img
          src={image}
          alt="..."
          style={{ width: "100%", height: "100%" }}
          className="img-fluid rounded shadow-sm "
          onLoad={onImageLoaded}
        />
        {!imageLoaded && (
          <div className="d-flex justify-content-center p-4" role="status">
            <Spinner animation="border" variant="danger" />
          </div>
        )}
      </div>
    </>
  );
};

export default PhotoItem;
