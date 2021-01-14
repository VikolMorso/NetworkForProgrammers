import React from "react";
import User from "./User";
import s from "./Users.module.css";

function Users(props) {
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
