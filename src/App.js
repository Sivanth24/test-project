import React from "react";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import Home from "./Home";

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  return (
    <div
      className={`w-screen h-screen`}
    >
      {!isLoggedIn ? <LoginForm /> : <Home />}
    </div>
  );
}

export default App;
