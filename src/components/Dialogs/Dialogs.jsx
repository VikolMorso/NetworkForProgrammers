import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field } from 'redux-form';
import { addMessage, newMessageCreator, onNewMessageCreator } from '../../redux/dialogs-reducer';
import s from './Dialogs.module.css';
import DialogsLink from './DialogsLink/DialogsLink';
import Message from './Message/Message';
import { reduxForm } from 'redux-form';
import {Textarea} from '../Preloader/Textarea';
import { MaxLengthCreator, RequiredField } from '../../validators/validator1';

function Dialogs(props) {
    

    let DialogsUserMas = props.DialogsUser.map((user) => <DialogsLink name={user.name}  id={user.id} />) //мапим юзеров в диалогах

    let MessageUserMas = props.MessageUser.map((message) => <Message message={message.message} />) // мапим сообщения юзеров

    let onSubmitMessage=(value)=>{
        props.newMessage(value)
    }
    return (
        <div className={s.content}>
            <h1>Dialogs</h1>
            <div className={s.main}>
                <div className={s.dialogs}>
                    {DialogsUserMas}
                </div>
                <div className={s.messages}>
                    {MessageUserMas}

                    <div className={s.form__send}>
                        <MessageFormRedux onSubmit={onSubmitMessage}/>
                    </div>

                </div>

            </div>
        </div>
    )
};
const maxLength = MaxLengthCreator(100);
 const DialogsForm=(props)=>{
     
return(
    <form onSubmit={props.handleSubmit}>
        <Field name='message' className={s.textarea} placeholder='enter your message' component={Textarea} validate={[RequiredField,  maxLength]}/>
        <button  className={s.send}>Send</button>
    </form>
)
}
const MessageFormRedux = reduxForm({form: 'MessageForm'})(DialogsForm)
export default Dialogs;