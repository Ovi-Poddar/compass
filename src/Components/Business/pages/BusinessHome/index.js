// import SideBar from "./Sidebar/Sidebar";

import Home from "./Home";
import {useParams} from 'react-router-dom';

import Sidebar from "../../Sidebar/Sidebar";

// import "./Sidebar/styles.css";

function BusinessHome() {
  const { business_id } = useParams();
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="main_content" >
          {/* <div className="info"> */}
          <div className="container ">
            <div className="main_content_body">
              {/* Add Your Main Content Codes Here */}
              <Home />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default BusinessHome;
