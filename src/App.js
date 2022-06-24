import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNav from "./Components/Header/TopNav";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CompassFooter from "./Components/CompassFooter/CompassFooter";

function App() {
  return (
    <>
      <Router>
          <TopNav/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login />} />
          </Routes>
          <CompassFooter/>
      </Router>
    </>
  );
}

export default App;
