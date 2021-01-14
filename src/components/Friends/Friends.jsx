import React from "react";
import { Field, reduxForm } from "redux-form";
import { RequiredField } from "../../validators/validator1";
import { Input } from "../Preloader/Textarea";
import UsersContainer from "../Users/UsersContainer";
import s from "./../Preloader/Textarea.module.css";

const Friends = (props) => {
  return (
    <>
      <UsersContainer />
    </>
  );
};

export default Friends;
