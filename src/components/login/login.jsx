import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { RequiredField } from "../../validators/validator1";
import { Input } from "../Preloader/Textarea";
import s from "./../Preloader/Textarea.module.css";

const LoginRedux = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.error && <div className={s.main__error}>{props.error}</div>}
      <div>
        <Field
          name="login"
          placeholder="login"
          component={Input}
          validate={[RequiredField]}
        />
      </div>
      <div>
        <Field
          name="password"
          placeholder="password"
          component={Input}
          validate={[RequiredField]}
        />
      </div>
      <div>
        <Field name="rememberMe" type="checkbox" component="input" /> remember
        me
      </div>
      {props.captcha === null ? null : (
        <div>
          <img src={props.captcha} />
          <div>
            <Field
              name="captcha"
              component={Input}
              validate={[RequiredField]}
            />
          </div>
        </div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const ReduxFormLogin = reduxForm({ form: "login" })(LoginRedux);

const Login = (props) => {
  let onSubmit = (formData) => {
    debugger;
    props.login(
      formData.login,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.auth === true) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxFormLogin onSubmit={onSubmit} captcha={props.captcha} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.Auth.isAuth,
  captcha: state.Auth.captcha,
});

export default connect(mapStateToProps, { login })(Login);
