import React, { useContext } from "react";
import UserContextProvider from "../Context/ContextProvider";
import UserContext from "../Context/UserContext";

function Profile() {
  let { info } = useContext(UserContext);

  if (info == null)
    return (
      <>
        <h1>Please Login</h1>
      </>
    );
  return (
    <>
      <UserContextProvider>
        <h1>Welcome</h1>
        <h1>{info.username}</h1>
        <h1>Your Password: {info.password}</h1>
      </UserContextProvider>
    </>
  );
}

export default Profile;
