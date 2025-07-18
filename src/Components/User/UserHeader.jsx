import React from "react";
import UserHeadernav from "./UserHeadernav";
import style from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();


  React.useEffect(() => {
    const { pathname } = location;
    setTitle(location.pathname);
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta")
        break;
    }
  }, [location]);''

  return (
    <>
      <header className={style.header}>
        <h1 className="title">{title}</h1>
        <UserHeadernav />
      </header>
    </>
  );
}; 

export default UserHeader;
