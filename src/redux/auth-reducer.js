import { stopSubmit } from "redux-form";
import { UsersApi } from "../Api/API";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
const AuthReduce = (state = initialState, action) => {

    switch (action.type) {
    case IS_AUTH: {
        
        return {
            ...state,
            ...action.payload
        };
    } 
    default:
    return state;
}
}
const IS_AUTH = 'IS_AUTH'

export const SetAuth = (id, email, login, isAuth) => (
    {
    type: IS_AUTH,
        payload:{id, email, login, isAuth}
})
export const getOurUser=()=>(dispatch) => {
        return UsersApi.getOurUser().then(response => 
        {   
            if (response.data.resultCode === 0){
                let {id, email, login} = response.data.data
            dispatch(SetAuth(id, email, login, true ))}
        })}

export const login = (email, password, rememberMe=false)=>{
    return async (dispatch) =>{ 
        
    let response = await UsersApi.login(email, password, rememberMe);

        if (response.data.resultCode === 0){
            dispatch(getOurUser())
        } else{ 
        let message = response.data.messages.length> 0? response.data.messages[0] : 'some error';
        debugger
        dispatch(stopSubmit("login", {_error: message}))}
    }
}
export const logout = ()=>{
    
    return async (dispatch) =>{  
        
     let response = await UsersApi.logout();
        if (response.data.resultCode === 0){
            dispatch(SetAuth(null, null, null, false))
        }
    }
}
export default AuthReduce;