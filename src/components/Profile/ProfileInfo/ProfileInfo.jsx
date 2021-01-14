import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import {
  MaxLengthCreator,
  RequiredField,
} from "../../../validators/validator1";
import { Input, Textarea } from "../../Preloader/Textarea";
import s from "./ProfileInfo.module.css";
import StatusHook from "./Status";

const maxLength = MaxLengthCreator(60);

function ProfileInfo(props) {
  const [editMod, setEditMod] = useState(false);

  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMod(false);
  };
  return (
    <div>
      <div className={s.about}>
        <div className={s.about__your}>
          <div className={s.ava}>
            {props.profile.photos.large === null ? (
              <img
                src="https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png"
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
              isOurProfile={props.isOurProfile}
            />
            {props.isOurProfile && (
              <div>
                New photo: <input type="file" onChange={props.savePhoto} />
              </div>
            )}
            {!editMod ? (
              <div onDoubleClick={() => setEditMod(true)}>
                <div>
                  <b>About Me</b>:{props.profile.aboutMe}
                </div>
                <div>
                  <b>Looking For A job</b>:{props.profile.lookingForAJob}
                </div>
                <div>
                  <b>Looking For A Job Description</b>:
                  {props.profile.lookingForAJobDescription}
                </div>
                <div>
                  <b>Full Name</b>:{props.profile.fullName}
                </div>
                {Object.keys(props.profile.contacts).map((key) => {
                  return (
                    <div key={key}>
                      <b>{key}</b>: {props.profile.contacts[key]}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div onDoubleClick={() => setEditMod(false)}>
                <ProfileInfoFormRedux
                  {...props}
                  onSubmit={onSubmit}
                  initialValues={{ ...props.profile }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ProfileInfoForm = (props) => {
  debugger;
  return (
    <form onSubmit={props.handleSubmit}>
      <button>Send</button>
      <div>
        <b>About me:</b>:
        <Field
          className={s.Field}
          name="aboutMe"
          component={Textarea}
          placeholder={props.profile.aboutMe}
          validate={[RequiredField, maxLength]}
        ></Field>
      </div>
      <div>
        <b>Looking For A job</b>:
        <Field name="LookingForAJob" type="checkbox" component="input" />
      </div>
      <div>
        <b>Looking For A Job Description</b>:
        <Field
          className={s.Field}
          name="lookingForAJobDescription"
          component={Textarea}
          validate={[RequiredField, maxLength]}
        ></Field>
      </div>
      <div>
        <b>Full Name</b>:{" "}
        <Field
          name="fullName"
          component={Input}
          validate={[RequiredField, maxLength]}
        />
      </div>
      {Object.keys(props.profile.contacts).map((key) => {
        return (
          <div key={key}>
            <b>{key}</b>:{" "}
            <Field className={s.Field} name={key} component={Textarea}></Field>
          </div>
        );
      })}{" "}
    </form>
  );
};

const ProfileInfoFormRedux = reduxForm({
  form: "ProfileInfo",
})(ProfileInfoForm);

export default ProfileInfo;
