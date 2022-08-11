import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Header Components */
import TopNav from "./Components/Header/TopNav";
import MsgAlert from "./Components/Header/MsgAlert";

/* Authentication */
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import CompassFooter from "./Components/CompassFooter/CompassFooter";

import ShowOwnBusiness from "./Components/Business/MyBusiness/ShowOwnBusiness";

import Landing from "./Components/LandingPage/Landing";

import BusinessHome from "./Components/Business/pages/BusinessHome";

import { useState } from "react";

import { Reviews } from "./Components/Business/pages/Reviews/index";

import { Queries } from "./Components/Business/pages/Queries/Queries_home";
import { Posts } from "./Components/Business/pages/Posts/Posts_home";
import { Offers } from "./Components/Business/pages/Offers";

import Business from "./Components/BusinessPages/BusinessHome";

import BusinessUpdates from "./Components/BusinessPages/BusinessUpdates";
import BusinessOffers from "./Components/BusinessPages/BusinessOffers";
import BusinessQuery from "./Components/BusinessPages/BusinessQuery";
import BusinessHours from "./Components/BusinessPages/BusinessHours";
import BusinessAmenities from "./Components/BusinessPages/BusinessAmenities";

/* States for context api  */
import ReviewState from "./Context/Review/ReviewState";
import UserState from "./Context/Users/UserState";

import MyBusinessItem from "./Components/Business/MyBusiness/MyBusinessItem";
import QueryState from "./Context/Query/QueryState";
import PostState from "./Context/Post/PostState";

import Profile from "./Components/UserProfile/Profile";

import { storage } from "./firebase";
import CreateBusinessForm from "./Components/Business/CreateBusiness/CreateBusinessForm";

import Main from "./Components/Business/CreateBusiness/Main";
import EditBusiness from "./Components/Business/EditBusiness/EditBusiness";
import ProfileFormLoader from "./Components/UserProfile/CreateProfile/ProfileFormLoader";

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
      <UserState>
        <ReviewState>
          <QueryState>
            <PostState>
              <Router>
                <TopNav showAlert={showAlert} />
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
                    element={<Main showAlert={showAlert} />}
                  />
                  <Route
                    exact
                    path="/showownbusinesses"
                    element={<ShowOwnBusiness />}
                  />
                  {/* Route for User Profile */}
                  <Route exact path="/profile/:user_id" element={<Profile />} />
                  {/* Route for Business Profile */}
                  <Route
                    exact
                    path="/business/:business_id"
                    element={<BusinessHome />}
                  />
                  <Route
                    exact
                    path="/business/edit/:business_id"
                    element={<EditBusiness />}
                  />
                  {/* <Route
            exact
            path="/showownbusinesses"
            element={<MyBusinessItem />}
          />

                {/* Added by Tanvir Raihan */}
                  <Route
                    exact
                    path="/createprofile"
                    element={<ProfileFormLoader showAlert={showAlert} />}
                  />
                  <Route
                    exact
                    path="/businessupdates/:business_id"
                    element={<BusinessUpdates />}
                  />
                  <Route
                    exact
                    path="/businessoffers/:business_id"
                    element={<BusinessOffers />}
                  />
                  <Route
                    exact
                    path="/businessquery/:business_id"
                    element={<BusinessQuery />}
                  />
                  <Route
                    exact
                    path="/businesshours/:business_id"
                    element={<BusinessHours />}
                  />
                  <Route
                    exact
                    path="/businessamenities/:business_id"
                    element={<BusinessAmenities />}
                  />
                  <Route
                    path="/businesshome/:business_id"
                    element={<Business />}
                  />

                  {/* Added for Business Sidebar Menu */}
                  <Route path="/businessdashboard" element={<BusinessHome />} />
                  <Route
                    path="/reviews/:business_id"
                    element={<Reviews showAlert={showAlert} />}
                  />
                  <Route
                    path="/queries/:business_id"
                    element={<Queries showAlert={showAlert} />}
                  />
                  <Route
                    path="/posts/:business_id"
                    element={<Posts showAlert={showAlert} />}
                  />
                  <Route path="/offers" element={<Offers />} />
                  {/* <Route path="/settings" element={<Setting />} /> */}
                  <Route path="*" element={<> not found</>} />
                </Routes>
                {/* <CompassFooter /> */}
              </Router>
            </PostState>
          </QueryState>
        </ReviewState>
      </UserState>
    </>
  );
}

export default App;
