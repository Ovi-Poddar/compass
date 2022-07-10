import { useState } from "react";
import  AlertContext  from "./AlertContext";

const AlertState = (props) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  return (
    <AlertContext.Provider value={{ alertMessage, alertType, setAlertMessage, setAlertType}}>
      {props.children}
    </AlertContext.Provider>
  )

}
export default AlertState;