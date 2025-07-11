import React from "react";
import { createContext } from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "./api";


export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(false);


  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  };

  const userLogin = async (username, password) => {
    try {
      setErro(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error("Erro de usuario");
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
    } catch (err) {
      setErro(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = React.useCallback(async () => {
    setData(null);
    setErro(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  }, []);

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setErro(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const autToken = await fetch(url, options);
          if (!autToken.ok) throw new Error("Token invalido");
          await getUser(token);
        } catch (erro) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false)
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <>
      <UserContext.Provider
        value={{ userLogin, data, userLogout, erro, loading, login,  }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
