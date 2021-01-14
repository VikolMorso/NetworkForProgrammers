import { stopSubmit } from "redux-form";
import { UsersApi } from "../Api/API";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null
};
const AuthReduce = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_CAPTCHA: {
        return {
            ...state, captcha: action.captcha
        }
    }
    default:
      return state;
  }
};
const IS_AUTH = "IS_AUTH";
const SET_CAPTCHA = "SET_CAPTCHA"
export const SetAuth = (id, email, login, isAuth) => ({
  type: IS_AUTH,
  payload: { id, email, login, isAuth },
});
export const setCaptcha = (captcha) => ({
    type: SET_CAPTCHA, captcha
})

export const getOurUser = () => (dispatch) => {
  return UsersApi.getOurUser().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(SetAuth(id, email, login, true));
    }
  });
};

export const getCaptcha = () => (dispatch) => {
    return UsersApi.getCaptcha().then((response)=>{
        dispatch(setCaptcha(response.data.url))
        
    })
}

export const login = (email, password, rememberMe = false, captcha) => {
  return async (dispatch) => {
    let response = await UsersApi.login(email, password, rememberMe, captcha);
   
    if (response.data.resultCode === 0) {
      dispatch(getOurUser());
    } else if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "some error";

      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    let response = await UsersApi.logout();
    if (response.data.resultCode === 0) {
      dispatch(SetAuth(null, null, null, false));
    }
  };
};
export default AuthReduce;
