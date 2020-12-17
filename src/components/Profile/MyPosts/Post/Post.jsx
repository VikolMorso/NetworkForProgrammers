import React from 'react';
import s from './Post.module.css';
function Post(props) {
    return (
        <div className={s.post}>
            <img src='https://archilab.online/images/1/123.jpg' className={s.ava_user}></img>
            <p>{props.post}</p>
            <div className={s.like}>Like: {props.likecount}</div>
        </div>
    )
};

export default Post;