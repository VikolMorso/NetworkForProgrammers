import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage, newMessageCreator, onNewMessageCreator } from '../../redux/dialogs-reducer';
import { WithAuthRedirect } from '../HOC/WithAuthRedirect';
import Dialogs from './Dialogs';



let mapStateToProps = (state) =>{
    
    return{
        DialogsUser:state.DialogsPage.DialogsUser,
        MessageUser:state.DialogsPage.MessageUser,
       

    }
};
let mapDispatchToProps = (dispatch) =>{
    return{
        newMessage : (message) => {                     
            dispatch(newMessageCreator(message));
        }
    
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),WithAuthRedirect)(Dialogs)
