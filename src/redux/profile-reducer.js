import { ProfileAPI, UsersApi } from "../Api/API";

let initialState = {
    PostUser: [
        { id: 1, post: 'Priv', likecount: 2 },
        { id: 2, post: 'opyat дрочешь', likecount: 0 },
        { id: 3, post: 'skolko mozhno, Max', likecount: 66 },
    ],
    profile: null,
    status:''
}
const profileReduce = (state = initialState, action) => {
    
    if (action.type === "ADD-POST") {
        
        if (state.onPostChange === '') {   
             //проверка поля на заполненность, если ничего не введено, то выдаст "пустое поле"
            return alert('Пустое поле')
        } else {
            let newPost = {                        //создаем новое свойство объекта PostUser
                id: 5,
                post: action.textPost.newPost,
                likecount: 0
            };
            debugger
            return {
                ...state,
                PostUser: [...state.PostUser, newPost],
            };
            
        }
         
    } else if (action.type === "SET_USERS_PROFILE"){
        return{ ...state, profile: action.profile}
    } else if (action.type === "SET_STATUS_USER"){
        debugger
        return {...state, status: action.status}
    }
    return state;
}

const AddPost = 'ADD-POST';                        // type отвечает за добавление поста 
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS_USER = 'SET_STATUS_USER'


export const sendPostCreator = (textPost) => ({ type: AddPost, textPost }); //передаем диспатчу тип, который добавляет новый пост на страницу

export const SetUsersProfile=(profile)=>({ type: SET_USERS_PROFILE, profile})

export const SetStatusUser=(status)=>({type: SET_STATUS_USER, status: status})

export const getProfileUser=(userId)=>{
    return async (dispatch)=>{
    let response = await UsersApi.getProfileUser(userId)
            dispatch(SetUsersProfile(response.data))
    }
}
export const getStatus=(userId)=>{
    return async (dispatch)=>{
   let response = await ProfileAPI.getStatusUser(userId)
        dispatch(SetStatusUser(response.data))
}}
export const updateStatus=(status)=>{
    
    return async (dispatch)=>{
    let response = await ProfileAPI.updateStatus(status)
        dispatch(SetStatusUser(status))
    }
}
export default profileReduce;