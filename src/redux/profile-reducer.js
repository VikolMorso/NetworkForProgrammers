import { ProfileAPI, UsersApi } from "../Api/API";
import store from "./store-redux";


let initialState = {
    PostUser: [
        { id: 1, post: 'Привет', likecount: 2 },
        { id: 2, post: 'тут ты можешь запосить свой коммент', likecount: 0 },
        { id: 3, post: 'но пока, к сожалению, он будет виден только тебе и потеряется, если ты перезапустишь страницу', likecount: 66 },
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
        
        return {...state, status: action.status}
    } else if (action.type === "SAVE_PHOTO_SUCCESS"){
        debugger
        return {...state, profile: {...state.profile, photos: {...state.profile.photos, large: action.photo}}}
    }
    return state;
}

const AddPost = 'ADD-POST';                        // type отвечает за добавление поста 
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS_USER = 'SET_STATUS_USER'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

export const sendPostCreator = (textPost) => ({ type: AddPost, textPost }); //передаем диспатчу тип, который добавляет новый пост на страницу

export const SetUsersProfile=(profile)=>({ type: SET_USERS_PROFILE, profile})

export const SetStatusUser=(status)=>({type: SET_STATUS_USER, status: status})

export const savePhotoSuccess = (photo) => ({ type: SAVE_PHOTO_SUCCESS, photo})

export const getProfileUser=(userId)=>{
    return async (dispatch)=>{
    let response = await UsersApi.getProfileUser(userId)
    
            dispatch(SetUsersProfile(response.data))
            dispatch(getStatus(response.data.userId))
            
    }
}
export const getStatus=(userId)=>{
    return async (dispatch)=>{
   let response = await ProfileAPI.getStatusUser(userId)
        dispatch(SetStatusUser(response.data))
}}
export const updateStatus=(status)=>{
    
    return async (dispatch)=>{
        debugger
    let response = await ProfileAPI.updateStatus(status)
        dispatch(SetStatusUser(status))
    }
}
export const savePhoto=(photo)=>{
    return async (dispatch)=>{
    let response = await ProfileAPI.savePhoto(photo)
    
        dispatch(savePhotoSuccess(response.data.data.photos.large))
    }
}


export const saveProfile = (formData) =>{
    const id = store.getState().Auth.id;
    debugger
    return async (dispatch) => {
        debugger
        let response = await ProfileAPI.saveProfile(formData)
        debugger
        dispatch(getProfileUser(id))
    }
}
export default profileReduce;