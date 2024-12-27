import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1 className="bg-blue-600 py-5 text-center text-white text-5xl font-thin  hover:bg-blue-500">
          Heading
        </h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
