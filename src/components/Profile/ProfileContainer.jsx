import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  SetUsersProfile,
  getProfileUser,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.props);
    let userId = this.props.match.params.idUser;

    if (!userId) {
      let id = this.props.myID;

      this.props.getProfileUser(id);
    } else {
      this.props.getProfileUser(userId);
    }

    this.props.getStatus(userId);
  }
  savePhoto = (e) => {
    if (e.target.files.length) {
      this.props.savePhoto(e.target.files[0]);
    }
  };
  render() {
    return (
      <Profile
        {...this.props}
        isOurProfile={!this.props.match.params.idUser}
        savePhoto={this.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  status: state.ProfilePage.status,
  myID: state.Auth.id,
  profile: state.ProfilePage.profile,
  isAuth: state.Auth.isAuth,
});
//WithAuthRedirect,

export default compose(
  connect(mapStateToProps, {
    SetUsersProfile,
    getProfileUser,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer);
