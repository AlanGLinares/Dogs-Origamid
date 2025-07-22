import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginLost from "./LoginLost";
import LoginReset from "./LoginReset";
import { UserContext } from "../../UserContext";
import style from "./Login.module.css";
import NotFound from "../../NotFound";
import Head from '../../Help/Head'

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={style.login}>
      <Head
        title="Login"
        description="Pagina Login"
      />
      <div className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="criar" element={<LoginCreate />}></Route>
          <Route path="perdeu" element={<LoginLost />}></Route>
          <Route path="resetar" element={<LoginReset />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default Login;
