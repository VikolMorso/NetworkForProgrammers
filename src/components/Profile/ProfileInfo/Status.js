import React from 'react';
import { connect } from 'react-redux';
import s from './ProfileInfo.module.css';
import { updateStatus } from '../../../redux/profile-reducer';
class Status extends React.Component {
    state = {
        editMod: false,
        localStatus: this.props.status
    }
    switchStatusOn = () => {

        this.setState(
            {
                editMod: true
            })
    }
    switchStatusOff = () => {

        this.setState({
            editMod: false
        })
        this.props.updateStatus(this.state.localStatus)
    }
    onChangeStatus = (e) => {

        this.setState({
            localStatus: e.currentTarget.value
        })
    }
    postStatus = () => {
        debugger
        this.props.updateStatus(this.state.localStatus)
    }
    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.status !== this.props.status) {
            this.setState({
                localStatus: this.props.status
            })
        }
    }
    render() {
        return <div>
            {this.state.editMod ?
                <div><textarea onBlur={this.switchStatusOff} autoFocus={true} onChange={this.onChangeStatus} value={this.state.localStatus}></textarea>
                    <button onClick={this.postStatus}>отправить</button></div> :
                <div onClick={this.switchStatusOn} className={s.status}>{this.props.status || 'no status'}</div>

            }
        </div>
    }
}

export default Status