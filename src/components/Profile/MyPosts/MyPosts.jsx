import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  MaxLengthCreator,
  RequiredField,
} from "../../../validators/validator1";
import { Textarea } from "../../Preloader/Textarea";

let maxLength = MaxLengthCreator(20);

function MyPosts(props) {
  let PostUserMas = props.PostUser.map((p) => (
    <Post post={p.post} key={p.id} likecount={p.likecount} />
  )); /* Мапим посты пользователей с кол-вом лайков*/

  let onSubmit = (textPost) => {
    props.sendPost(textPost);
  };

  return (
    <div className={s.myposts}>
      <p>My posts</p>
      <PostFormRedux onSubmit={onSubmit} />
      {PostUserMas}
    </div>
  );
}
const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className={s.Field}
        name="newPost"
        component={Textarea}
        validate={[RequiredField, maxLength]}
      ></Field>
      <br />
      <button className={s.send}>Send</button>
    </form>
  );
};
const PostFormRedux = reduxForm({ form: "post" })(PostForm);
export default MyPosts;
