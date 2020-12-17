import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
function Header(props) {
  return (
    <header className={s.header}>
      <h1 className={s.header__karen}>social programmers</h1>
      {props.isAuth ? (
        <div className={s.main__auth}>
          <NavLink to="/profile" className={s.auth}>
            {props.login}
          </NavLink>
          <button onClick={props.logout} className={s.auth__btn}>
            Loguot
          </button>
        </div>
      ) : (
        <NavLink to="/login" className={s.auth}>
          Login
        </NavLink>
      )}
    </header>
  );
}

export default Header;
