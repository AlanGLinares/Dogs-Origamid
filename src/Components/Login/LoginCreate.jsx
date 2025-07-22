import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import style from "../Login/LoginCreate.module.css";
import UseForm from "../../Hooks/UseForm";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import UseFetch from "../../Hooks/UseFetch";
import Error from "../../Help/Error";
import Head from "../../Help/Head";

const LoginCreate = () => {
  const username = UseForm();
  const password = UseForm();
  const email = UseForm("email");

  const { userLogin } = React.useContext(UserContext);
  const { loading, erro, request } = UseFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    });
    const { responseUser } = await request(url, options);
    if (responseUser.ok) userLogin(username.value, password.value);
    console.log(responseUser);
  };

  return (
    <section className="animeLeft">
      <Head title="Criar Conta" />
      <div className={style.logincreate}>
        <h1 className="title">Cadastre-se</h1>
        <form className="form" onSubmit={handleSubmit}>
          <Input label="Usuario" type="text" {...username} />
          <Input label="Email" type="senha" {...email} />
          <Input label="Senha" type="password" {...password} />
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
          <Error erro={erro} />
        </form>
      </div>
    </section>
  );
};

export default LoginCreate;
