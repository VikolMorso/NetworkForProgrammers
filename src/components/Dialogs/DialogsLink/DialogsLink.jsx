import React from "react";
import { NavLink } from "react-router-dom";
import s from "..//Dialogs.module.css";

function DialogsLink(props) {
  return (
    <div className={s.dialog}>
      <div className={s.avatarka}>
        <img
          src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
          alt=""
          className={s.ava_user}
        />
      </div>
      <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

export default DialogsLink;
