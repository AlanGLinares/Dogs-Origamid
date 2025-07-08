import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Dogs from "../Assets/dogs.svg?react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <>
      <header className={style.header}>
        <nav className={`${style.nav} container`}>
          <Link className={style.logo} to="/" aria-label="Dog - Home">
            <Dogs />
          </Link>
          {data ? (
            <Link className={style.login} to="/conta">
              {data.username}
            </Link>
          ) : (
            <Link className={style.login} to="/login">
              Login / Criar
            </Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
