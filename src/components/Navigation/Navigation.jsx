import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import Sidebar from "./Sidebar/Sidebar";
function Navigation(props) {
  // let SidebarMas =props.Sidebar.map( p =>   <Sidebar avatarka={p.avatarka} key={p.id} name={p.name}/> )

  return (
    <div className={s.main}>
      <nav className={s.nav}>
        <ul className={s.nav__menu}>
          <li className={s.link}>
            <NavLink to="/Profile" activeClassName={s.active}>
              Profile
            </NavLink>
          </li>
          <li className={s.link}>
            <NavLink to="/Dialogs" activeClassName={s.active}>
              Dialogs
            </NavLink>
          </li>
          <li className={s.link}>
            <NavLink to="/friends" activeClassName={s.active}>
              Friends
            </NavLink>
          </li>
          <li className={s.link}>
            <NavLink to="/Music" activeClassName={s.active}>
              Music
            </NavLink>
          </li>
          <li className={s.link}>
            <NavLink to="/Users" activeClassName={s.active}>
              Users
            </NavLink>
          </li>

          <li className={`${s.link} ${s.setting}`}>
            <NavLink to="/Settings" activeClassName={s.active}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <h3 className={s.tittle}>Friends</h3>
      {/* <div className={s.users}>{SidebarMas}</div> */}
    </div>
  );
}

export default Navigation;
