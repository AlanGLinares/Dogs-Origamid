import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginLost from './LoginLost'
import LoginReset from './LoginReset'

const Login = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="criar" element={<LoginCreate />}></Route>
        <Route path="perdeu" element={<LoginLost />}></Route>
        <Route path="resetar" element={<LoginReset />}></Route>
      </Routes>
    </section>
  );
};

export default Login;
