// import SideBar from "./Sidebar/Sidebar";

import Home from "./Home";

import Sidebar from "../../Sidebar/Sidebar";

// import "./Sidebar/styles.css";

function BusinessHome() {
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="main_content" >
          {/* <div className="info"> */}
          <div className="container ">
            <div className="main_content_body">
              <Home />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default BusinessHome;