import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



export const WithAuthRedirect=(Component)=>{
    let mapStateToProps = (state)=>({
    isAuth: state.Auth.isAuth,
})
    let WrapperContainer = (props) =>{
        
        if(!props.isAuth){ return <Redirect to='/login'/>
    } else 
       { return (
        <Component {...props} />
    )}
    }
    return connect(mapStateToProps)(WrapperContainer)
}

