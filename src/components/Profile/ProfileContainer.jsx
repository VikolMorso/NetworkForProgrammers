import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { SetUsersProfile, getProfileUser, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.idUser;
    
        if (!userId) {
            let id = this.props.myID
            this.props.getProfileUser(id)
        } else { this.props.getProfileUser(userId) }

        this.props.getStatus(userId)

    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}


let mapStateToProps = (state) => ({
    status: state.ProfilePage.status,
    myID: state.Auth.id,
    profile: state.ProfilePage.profile
})
//WithAuthRedirect,

export default compose(connect(mapStateToProps, { SetUsersProfile, getProfileUser, getStatus, updateStatus }), withRouter)(ProfileContainer)