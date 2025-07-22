import React from "react";
import { PASSWORD_LOST } from "../../api";
import Error from "../../Help/Error";
import Head from "../../Help/Head";
import UseFetch from "../../Hooks/UseFetch";
import UseForm from "../../Hooks/UseForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import style from "./LoginLost.module.css";

const LoginLost = () => {
  const login = UseForm();
  const { data, loading, erro, request } = UseFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login.Validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const { json } = await request(url, options);

      console.log(json);
    }
  };

  return (
    <section className={`${style.loginLost} animeLeft`}>
      <Head title="Perdeu a Senha " />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{color: "#4c1"}}>{data}</p>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disable="true">Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error erro={erro} />
    </section>
  );
};

export default LoginLost;
