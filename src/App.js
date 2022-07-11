import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNav from "./Components/Header/TopNav";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CompassFooter from "./Components/CompassFooter/CompassFooter";
import SignUp from "./Components/SignUp/SignUp";
import CreateBusiness from "./Components/Business/CreateBusiness";

import MsgAlert from "./Components/Header/MsgAlert";
import Landing from "./Components/LandingPage/Landing";

import { useState } from "react";


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2000);
  }

  return (
    <>
        <Router>
          <TopNav />
          <MsgAlert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login showAlert = {showAlert} />} />
            <Route exact path="/signup" element={<SignUp  showAlert = {showAlert}  />} />
            <Route exact path="/landing" element={<Landing/>} />
            <Route exact path="/createbusiness" element={<CreateBusiness showAlert = {showAlert}/>} />
          </Routes>
          {/* <CompassFooter /> */}
        </Router>
    </>
  );
}

export default App;
