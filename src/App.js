import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNav from "./Components/Header/TopNav";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CompassFooter from "./Components/CompassFooter/CompassFooter";
import SignUp from "./Components/SignUp/SignUp";
import { CreateBusiness } from "./Components/Business/CreateBusiness";

// import UserState from "./Context/Users/UserState";

import AlertState from "./Context/Alert/AlertState";
import MsgAlert from "./Components/Header/MsgAlert";

function App() {
  return (
    <>
      <AlertState>
        <Router>
          <TopNav />
          <MsgAlert />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/createbusiness" element={<CreateBusiness />} />
          </Routes>
          {/* <CompassFooter /> */}
        </Router>
      </AlertState>
    </>
  );
}

export default App;
