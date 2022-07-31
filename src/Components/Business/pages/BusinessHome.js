import React from "react";
import BusinessHours from "../../BusinessPages/BusinessHours";
import SideBar from "../Sidebar/Sidebar";

export const BusinessHome = () => {
  return (
    <>
      <>
        <SideBar />
        <div className="Offers container mx-2">
          <BusinessHours />
        </div>
      </>
    </>
  );
};
