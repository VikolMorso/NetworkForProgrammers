import React, { useState } from 'react';
import { connect } from 'react-redux';
import s from './ProfileInfo.module.css';
import { updateStatus } from '../../../redux/profile-reducer';
const Status = (props) => {

let [editMod, setEditMod]=useState(false)
let [localStatus, setStatus]=useState(props.status)

let switchStatusOff = () => {
    setEditMod(false)
    props.updateStatus(localStatus)
}
let switchStatusOn = () => {
    setEditMod(true)
}
let postStatus = () => {
    props.updateStatus(localStatus)
}
let onChangeStatus = (e) => {
setStatus(e.currentTarget.value)
}

    return <div>
        {editMod ?
            <div><textarea onBlur={switchStatusOff} autoFocus={true} onChange={onChangeStatus} value={this.state.localStatus}></textarea>
                <button onClick={postStatus}>отправить</button></div> :
            <div onClick={switchStatusOn} className={s.status}>{props.status || 'no status'}</div>

        }
    </div>

}

export default Status