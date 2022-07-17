import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNav from "./Components/Header/TopNav";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CompassFooter from "./Components/CompassFooter/CompassFooter";
import SignUp from "./Components/SignUp/SignUp";

import UserState from "./Context/Users/UserState";
import Business from "./Components/BusinessPages/BusinessHome";
import AddReview from "./Components/Review/Review";
import BusinessUpdates from "./Components/BusinessPages/BusinessUpdates";
import BusinessOffers from "./Components/BusinessPages/BusinessOffers";
import BusinessQuery from "./Components/BusinessPages/BusinessQuery";
import BusinessHours from "./Components/BusinessPages/BusinessHours";
import BusinessAmenities from "./Components/BusinessPages/BusinessAmenities";

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
            <Route exact path="/review" element={<AddReview />}></Route>
            <Route exact path="/businesshome" element={<Business />}></Route>
            <Route
              exact
              path="/businessupdates"
              element={<BusinessUpdates />}
            ></Route>
            <Route
              exact
              path="/businessoffers"
              element={<BusinessOffers />}
            ></Route>
            <Route
              exact
              path="/businessquery"
              element={<BusinessQuery />}
            ></Route>
            <Route
              exact
              path="/businesshours"
              element={<BusinessHours />}
            ></Route>
            <Route
              exact
              path="/businessamenities"
              element={<BusinessAmenities />}
            ></Route>
          </Routes>
          {/* <CompassFooter /> */}
        </Router>
      </UserState>
    </>
  );
}

export default App;
