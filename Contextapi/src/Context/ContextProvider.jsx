import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [info, setInfo] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ info, setInfo }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
