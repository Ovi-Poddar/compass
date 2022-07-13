import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNav from "./Components/Header/TopNav";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CompassFooter from "./Components/CompassFooter/CompassFooter";
import SignUp from "./Components/SignUp/SignUp";
import CreateBusiness from "./Components/Business/CreateBusiness";
import ShowOwnBusiness from "./Components/Business/ShowOwnBusiness";

import MsgAlert from "./Components/Header/MsgAlert";
import Landing from "./Components/LandingPage/Landing";
import BusinessPageLanding from "./Components/Business/BusinessPageLanding";

import Dashboard from "./Components/Business/pages/Dashboard";
import Users from "./Components/Business/pages/Users";
import Messages from "./Components/Business/pages/Messages";
import FileManager from "./Components/Business/pages/FileManager";
import Analytics from "./Components/Business/pages/Analytics";
import Order from "./Components/Business/pages/Order";
import Saved from "./Components/Business/pages/Saved";
import Setting from "./Components/Business/pages/Setting";

import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <TopNav />
        <MsgAlert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={<Login showAlert={showAlert} />}
          />
          <Route
            exact
            path="/signup"
            element={<SignUp showAlert={showAlert} />}
          />
          <Route exact path="/landing" element={<Landing />} />
          <Route
            exact
            path="/createbusiness"
            element={<CreateBusiness showAlert={showAlert} />}
          />
          {/* <Route exact path="/showownbusinesses" element={<ShowOwnBusiness/>} /> */}
          <Route
            exact
            path="/showownbusinesses"
            element={<BusinessPageLanding />}
          />

          {/* added for sidebar */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
        {/* <CompassFooter /> */}
      </Router>
    </>
  );
}

export default App;
