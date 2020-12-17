import { UsersApi } from "../Api/API";
import { getOurUser } from "./auth-reducer";

let initialState = {
    inition: false
}
const AppReduce = (state = initialState, action) => {

    switch (action.type) {
    case INITIALED: {
        debugger
        return {
            ...state,
            inition: true
        };
    } 
    default:
    return state;
}
}
const INITIALED = 'INITIALED'

export const Initialed = () => (
    {
    type: INITIALED,
})
export const InitialApp=()=>(dispatch) => {
       let promise =  dispatch(getOurUser())
       debugger
       Promise.all([promise]).then(()=>
           dispatch(Initialed())
       )
    }
    


export default AppReduce;