import { NavLink } from "react-router-dom";
import React from "react";
import s from "./Users.module.css";

function User({ u, followInProgress, Following, UnFollowing }) {
  return (
    <div key={u.id} className={s.main}>
      <div className={s.AvatarkaAndBtn}>
        <NavLink to={"/profile/" + u.id}>
          <img
            src={
              u.photos.small != null
                ? u.photos.small
                : "https://user-life.com/uploads/posts/2018-08/1535615328_kak-udalit-avatarku-postavit-foto-sdelat-zagruzit-dobavit-telegramm-skayp-vayber-vatsap-windows-10.gif"
            }
            alt=""
            className={s.ava}
          />
        </NavLink>
        {u.followed ? (
          <button
            href="#"
            className={s.btn_follow}
            disabled={followInProgress.some((id) => id === u.id)}
            onClick={() => {
              return Following(u.id);
            }}
          >
            UnFollow
          </button>
        ) : (
          <button
            href="#"
            className={s.btn_follow}
            disabled={followInProgress.some((id) => id === u.id)}
            onClick={() => {
              return UnFollowing(u.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={s.info__users}>
        <NavLink to={"/profile/" + u.id}>
          <p className={s.name}>{u.name}</p>
        </NavLink>
        <p className={s.status}>{u.status != null ? u.status : "no status"}</p>
      </div>
      <div className={s.location}>
        <p className={s.city}>{"u.city"},</p>
        <p className={s.country}>{"u.country"}</p>
      </div>
    </div>
  );
}

export default User;
