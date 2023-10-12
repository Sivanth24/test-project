import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./slices/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(fetchUser({ username, password }));
  };

  return (
    <div
      className={`w-screen h-full flex justify-center items-center gap-9 py-12`}
    >
      <div
        className={`px-8 py-14 rounded-md shadow-lg flex flex-col justify-center items-center gap-6 bg-slate-300`}
      >
        <input
          className={`px-2 py-1 rounded-md border`}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={`px-2 py-1 rounded-md border`}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={`px-4 py-1 rounded-md bg-orange-400`}
          onClick={() => handleLogin()}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
