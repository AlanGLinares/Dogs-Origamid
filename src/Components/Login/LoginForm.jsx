import React from "react";
import { Link } from "react-router-dom";
import UseForm from "../../Hooks/UseForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();

  console.log(username);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.Validate() && password.Validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  };

  return (
    <>
      <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuario" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button>Entrar</Button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
      </section>
    </>
  );
};

export default LoginForm;
