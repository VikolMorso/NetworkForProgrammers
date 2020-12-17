import React from 'react';
import { connect } from 'react-redux';
import { PostChangeCreator, sendPostCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) =>{
    return{
        PostUser: state.ProfilePage.PostUser,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        
        sendPost: (textPost) => {                   //обработчик событий при клике на кнопку отправить пост
            dispatch(sendPostCreator(textPost))}
    
        }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;