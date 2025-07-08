import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import Adicionar from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import style from "../User/UserHeaderNav.module.css";

const UserHeadernav = () => {
  const [moblie, setMoblie] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <>
      <nav className={style.nav}>
        <NavLink to="/conta" end>
          <Feed />
          {moblie && <p>Minhas Fotos</p>}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {moblie && <p>Estatísticas</p>}
        </NavLink>
        <NavLink to="/conta/postar">
          <Adicionar />
          {moblie && <p>Adicionar Foto</p>}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {moblie && <p>Sair</p>}
        </button>
      </nav>
    </>
  );
};

export default UserHeadernav;
