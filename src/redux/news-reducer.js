import { stopSubmit } from "redux-form";
import { UsersApi } from "../Api/API";

let initialState = {
    propertyValue: 0,
    initialPayment: 0,
    creditTerm: 0,
    interestRates: 0,
    monthlyPayment: 0,
    requiredIncome: 0,
    overpayment: 0,
    bodyCredit: 0
}
const CreditReduce = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_PROPERTY_VALUE: {

            return {
                ...state,
                propertyValue: action.propertyValue
            };
        }
        case CHANGE_INITIAL_PAYMENT: {

            return {
                ...state,
                initialPayment: action.initialPayment
            };
        }
        case CHANGE_CREDIT_TERM: {

            return {
                ...state,
                creditTerm: action.creditTerm
            };
        }
        case CHANGE_INTEREST_RATES: {

            return {
                ...state,
                interestRates: action.interestRates
            };
        }
        case SAVE: {

            return {
                ...state
            };
        }
        case CLEAR: {

            return {
                ...state,
                propertyValue: 0,
                initialPayment: 0,
                creditTerm: 0,
                interestRates: 0,
            };
        }

        default:
            return state;
    }
}
const CHANGE_PROPERTY_VALUE = 'CHANGE_PROPERTY_VALUE'
const CHANGE_INITIAL_PAYMENT = 'CHANGE_INITIAL_PAYMENT'
const CHANGE_CREDIT_TERM = 'CHANGE_CREDIT_TERM'
const CHANGE_INTEREST_RATES = 'CHANGE_INTEREST_RATES'
const SAVE = 'SAVE'
const CLEAR = 'CLEAR'

export const changePropertyValue = (propertyValue) => ({
    type: CHANGE_PROPERTY_VALUE, propertyValue
})
export const changeInitialPayment = (initialPayment) => ({
    type: CHANGE_INITIAL_PAYMENT, initialPayment
})
export const changeCreditTerm = (creditTerm) => ({
    type: CHANGE_CREDIT_TERM, creditTerm
})
export const changeInterestRates = (interestRates) => ({
    type: CHANGE_INTEREST_RATES, interestRates
})
export const isSAVE = () => ({
    type: SAVE
})
export const isCLEAR = () => ({
    type: CLEAR
})


export default CreditReduce;






// export const getOurUser=()=>(dispatch) => {
//         return UsersApi.getOurUser().then(response => 
//         {   
//             if (response.data.resultCode === 0){
//                 let {id, email, login} = response.data.data
//             dispatch(SetAuth(id, email, login, true ))}
//         })}

// export const login = (email, password, rememberMe=false)=>{
//     return (dispatch) =>{ 

//     UsersApi.login(email, password, rememberMe).then(response =>{ 
//         if (response.data.resultCode === 0){
//             dispatch(getOurUser())
//         } else{ 
//         let message = response.data.messages.length> 0? response.data.messages[0] : 'some error';
//         debugger
//         dispatch(stopSubmit("login", {_error: message}))}
//     })}
// }
// export const logout = ()=>{

//     return (dispatch) =>{  

//     UsersApi.logout().then(response =>{  
//         if (response.data.resultCode === 0){
//             dispatch(SetAuth(null, null, null, false))
//         }
//     })}
// }
