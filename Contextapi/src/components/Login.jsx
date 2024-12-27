import React, { useContext, useState } from "react";
import UserContextProvider from "../Context/ContextProvider";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setInfo } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    setInfo({ username, password });
  }

  return (
    <>
      <UserContextProvider>
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </UserContextProvider>
    </>
  );
}

export default Login;
