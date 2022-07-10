import React, { useState, useContext } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoIcon from "@mui/icons-material/Info";

import AlertContext from "../../Context/Alert/AlertContext";

export default function MsgAlert(props) {
  const { alertMessage, alertType } = useContext(AlertContext);

  console.log(alertMessage, alertType);

  return (
    <>
      {alertMessage.length > 0 && (
        <div
          className={`alert alert-${alertType} alert-dismissible fade show container`}
          role="alert"
        >
          <strong>
            {alertType.localeCompare("success") == 0 && <CheckCircleOutlineIcon />}
            {alertType.localeCompare("danger") == 0 && <ErrorOutlineIcon />}
            {alertType.localeCompare("info") == 0 && <InfoIcon />}
            {alertType.localeCompare("warning") == 0 && <WarningAmberIcon />}
            {alertMessage}
          </strong>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </>
  );
}
