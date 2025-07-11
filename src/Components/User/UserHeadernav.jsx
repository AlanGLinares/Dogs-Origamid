import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import Adicionar from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import style from "../User/UserHeaderNav.module.css";
import UseMedia from "../../Hooks/UseMedia";

const UserHeadernav = () => {
  const moblie = UseMedia("(max-width: 40rem)");
  const [moblieMenu, setMoblieMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout(navigate);
  };


  // remove o menu-moblie quando click em algum item conta / estastiticas / minhasfotos
  const {pathname} = useLocation()
  React.useEffect(() => {
    setMoblieMenu(false)
  }, [pathname])

  return (
    <>
      {moblie && (
        <button
          aria-label="Menu"
          className={`${style.moblieButton} ${
            moblieMenu && style.moblieButtonActive
          }`}
          onClick={() => setMoblieMenu(!moblieMenu)}
        ></button>
      )}
      <nav
        className={`${moblie ? style.navMoblie : style.nav}  ${
          moblieMenu && style.navMoblieActive
        }`}
      >
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
        <button onClick={handleLogout}>
          <Sair />
          {moblie && <p>Sair</p>}
        </button>
      </nav>
    </>
  );
};

export default UserHeadernav;
