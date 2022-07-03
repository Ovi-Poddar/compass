import userContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {

    return (
        <userContext.Provider value = {{}} >
            {props.children}
        </userContext.Provider>
    )
};

export default UserState;