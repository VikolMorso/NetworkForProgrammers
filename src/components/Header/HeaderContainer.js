import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getOurUser, SetAuth,logout } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component{

    
    render(){return(
        <Header {...this.props} />
    )}
}
 let mapStateToProps = (state) => {
     
     return {
        login: state.Auth.login,
        isAuth: state.Auth.isAuth
        
     }
 }

export default connect(mapStateToProps, {SetAuth, getOurUser, logout})(HeaderContainer);