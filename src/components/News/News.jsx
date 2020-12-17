import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { RequiredField } from '../../validators/validator1';
import { Input } from '../Preloader/Textarea';
import s from './../Preloader/Textarea.module.css'

const LoginRedux=(props)=>{
    debugger
    return(
        <form onSubmit={props.handleSubmit}>
        {props.error && <div className={s.main__error}>{props.error}</div>}
        <div>Стоимость недвижимости в рублях<Field name='propertyValue' value={props.propertyValue} component={Input} validate={[RequiredField]} /></div>
        <div>Первоначальный взнос в рублях<Field name='initialPayment'  value={props.initialPayment} component={Input} validate={[RequiredField]}/></div>
        <div>Срок кредита (лет)<Field name='initialPayment'  value={props.creditTerm} component={Input} validate={[RequiredField]}/></div>
        <div>Процентная ставка (%)<Field name='initialPayment'  value={props.interestRates} component={Input} validate={[RequiredField]}/></div>
        <div><button>Login</button></div>
        </form>
    )
}

const ReduxFormLogin=reduxForm({form:'login'})(LoginRedux)


const News=(props)=>{
    
    let onSubmit=(formData)=>{
        
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.auth === false){ return <Redirect to={'/profile'}/>};

    return (
        <div>
            <h1>Login</h1>
            <ReduxFormLogin onSubmit={onSubmit}/>
            <div>
                <div>
                    <div>Ежемесячный платеж: </div>
                    <div>Переплата: </div>
                </div>
                <div>
                    <div>Необходимый доход: </div>
                    <div>Тело кредита: </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) =>({
    propertyValue: state.News.propertyValue,
    initialPayment: state.News.initialPayment,
    creditTerm: state.News.creditTerm,
    interestRates: state.News.interestRates,
})

export default connect( mapStateToProps , {login})(News)