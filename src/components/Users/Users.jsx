import React from "react";
import User from "./User";
import s from "./Users.module.css";

function Users(props) {
  debugger;
  return (
    <div className={s.block}>
      {props.Users.map((u) => (
        <User
          u={u}
          followInProgress={props.followInProgress}
          Following={props.Following}
          UnFollowing={props.UnFollowing}
        />
      ))}
    </div>
  );
}

export default Users;

{
  /* <div key={u.id} className={s.main}>
          <div className={s.AvatarkaAndBtn}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={
                  u.photos.small != null
                    ? u.photos.small
                    : "https://i2.wp.com/info-4all.ru/images/1f71bd35f30694013d926809865f554d.jpg"
                }
                alt=""
                className={s.ava}
              />
            </NavLink>
            {u.followed ? (
              <button
                href="#"
                className={s.btn_follow}
                disabled={props.followInProgress.some((id) => id === u.id)}
                onClick={() => {
                  return props.Following(u.id);
                }}
              >
                UnFollow
              </button>
            ) : (
              <button
                href="#"
                className={s.btn_follow}
                disabled={props.followInProgress.some((id) => id === u.id)}
                onClick={() => {
                  return props.UnFollowing(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={s.info__users}>
            <p className={s.name}>{u.name}</p>
            <p className={s.status}>
              {u.status != null ? u.status : "no status"}
            </p>
          </div>
          <div className={s.location}>
            <p className={s.city}>{"u.city"},</p>
            <p className={s.country}>{"u.country"}</p>
          </div>
        </div> */
}
