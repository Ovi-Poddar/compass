import Button from "react-bootstrap/esm/Button";
import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import DeleteIcon from "@mui/icons-material/Delete";

// show image zoomed modal
function ZoomImageModal(props) {
    const [confirmDeleteShow, setConfirmDeleteShow] = useState(false);
  
    const handleConfirmDeleteClose = () => setConfirmDeleteShow(false);
    const handleConfirmDeleteShow = () => setConfirmDeleteShow(true);
  
    return (
      <>
        {/* Show Pop Up Modal FOr the Clicked Image */}
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img
              src={props.image}
              alt="..."
              style={{ width: "100%", height: "100%" }}
              className="img-fluid rounded shadow-sm "
            />
          </Modal.Body>
          {props.owner_id === props.user_id && localStorage.getItem("token") && (
          <Modal.Footer>
            
              <Button
                className="btn btn-danger"
                onClick={handleConfirmDeleteShow}
              >
                <DeleteIcon />
              </Button>
            
          </Modal.Footer>)}
        </Modal>
  
        {/* handle confirm delete */}
        <Modal
          show={confirmDeleteShow}
          onHide={handleConfirmDeleteClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Are you Sure to Delete This Photo?
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleConfirmDeleteClose}>
              No
            </Button>
            <Button variant="success" onClick={handleConfirmDeleteClose}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function HomePhotoItem(props) {
    const [imageModalShow, setImageModalShow] = React.useState(false);

    const onHide = () => {
      setImageModalShow(false);
    };
  
    return (
        <>
           <ZoomImageModal
              show={imageModalShow}
              onHide={onHide}
              image={props.image}
              owner_id={props.owner_id}
              user_id={props.user_id}
            />
            <img
              src={props.image}
              alt="..."
              style={{ height: "200px", width: "200px" }}
              className="img-fluid rounded shadow-sm "
              onClick={() => setImageModalShow(true)}
            />
        </>
      );
    };
    
    export default HomePhotoItem;
    