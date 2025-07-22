import React from "react";
import { Link } from "react-router-dom";
import UseForm from "../../Hooks/UseForm";
import Input from "../Forms/Input";
import { UserContext } from "../../UserContext";
import Error from "../../Help/Error";
import style from "./LoginForm.module.css";
import Button from '../Forms/Button'
import buttonStyle from '../Forms/Button.module.css'
import Head from "../../Help/Head";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();

  const { userLogin, erro, loading } = React.useContext(UserContext);

  // React.useEffect(() => {
  //   const token = window.localStorage.getItem("token");
  //   if (token) {
  //     getUser(token);
  //   }
  // }, []);

  // const getUser = async (token) => {
  //   const { url, options } = USER_GET(token);

  //   const response = await fetch(url, options);
  //   const json = await response.json();
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.Validate() && password.Validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <>
      <section className="animeLeft">
        <Head title="Login"/>
        <h1 className="title">Login</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <Input label="Usuario" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Entrar</Button>
          )}
          <Error erro={erro} />
        </form>
        <Link className={style.lost} to="/login/perdeu">
          Perdeu a Senha ?
        </Link>
        <div className={style.cadastro}>
          <h2 className={style.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
            <Link className={buttonStyle.button} to="/login/criar">
              Cadastro
            </Link>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
