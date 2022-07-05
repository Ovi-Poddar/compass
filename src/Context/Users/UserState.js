import userContext from "./UserContext";

const UserState = (props) => {

    return (
        <userContext.Provider value = {{}} >
            {props.children}
        </userContext.Provider>
    )
};

export default UserState;