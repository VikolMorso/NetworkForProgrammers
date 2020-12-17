import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '..//Dialogs.module.css';

function DialogsLink(props) {
    return (
        <div className={s.dialog}>
            <div className={s.avatarka}>
                <img src="https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg" alt="" className={s.ava_user} />
            </div>
            <NavLink to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
};



export default DialogsLink;