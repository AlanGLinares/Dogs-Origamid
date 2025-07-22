import React from "react";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import UseFetch from "../../Hooks/UseFetch";
import UseForm from "../../Hooks/UseForm";
import { PASSWORD_RESET } from "../../api";
import Error from "../../Help/Error";
import { useNavigate } from "react-router-dom";
import Head from '../../Help/Head'

const LoginReset = () => {
  const password = UseForm();
  const { erro, loading, request } = UseFetch();
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) {
      setKey(key);
    }
    if (login) {
      setLogin(login);
    }
  }, []);

  const handleSubmitReset = async (event) => {
    event.preventDefault();
    if (password.Validate()) {
      const { url, options } = PASSWORD_RESET({
        key,
        login,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Resete a Senha" />
      <h1 className="title">Resete a Senha</h1>
      <form action="" onSubmit={handleSubmitReset}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disable="true">Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error erro={erro} />
    </section>
  );
};

export default LoginReset;
