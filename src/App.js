import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNav from "./Components/Header/TopNav";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CompassFooter from "./Components/CompassFooter/CompassFooter";
import SignUp from "./Components/SignUp/SignUp";

import UserState from "./Context/Users/UserState";

function App() {


  return (
    <>
      <UserState>
        <Router>
          <TopNav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
          <CompassFooter />
        </Router>
      </UserState>
    </>
  );
}

export default App;
