import React from "react";
import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import StatusHook from "./Status";
function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.about}>
        <div className={s.about__your}>
          <div className={s.ava}>
            {props.profile.photos.large === null ? (
              <img
                src="https://i2.wp.com/info-4all.ru/images/1f71bd35f30694013d926809865f554d.jpg"
                alt=""
                className={s.ava__img}
              />
            ) : (
              <img
                src={props.profile.photos.large}
                alt=""
                className={s.ava__img}
              />
            )}
          </div>
          <div className={s.about__your__main}>
            <div className={s.name}>{props.profile.fullName}</div>
            <StatusHook
              status={props.status}
              updateStatus={props.updateStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
