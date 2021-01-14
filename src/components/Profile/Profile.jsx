import React from "react";
import { Redirect } from "react-router-dom";
import store from "../../redux/store-redux";
import Preloader from "../Preloader/Preloader";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  if (!props.isAuth) {
    return <Redirect to="login" />;
  }
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <section className={s.profile}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        isOurProfile={props.isOurProfile}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer store={props.store} />
    </section>
  );
}

export default Profile;
