import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import AuthReduce from './auth-reducer';
import dialogsReduce from './dialogs-reducer';
import profileReduce from './profile-reducer';
import sidebarReduce from './sidebar-reducer';
import usersReduce from './users-reducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReduce from './app-reducer';
import CreditReduce from './news-reducer';


let reducers = combineReducers({
    ProfilePage: profileReduce,
    DialogsPage: dialogsReduce,
    Sidebar: sidebarReduce,
    UsersPage: usersReduce,
    Auth: AuthReduce,
    form: formReducer,
    App: AppReduce,
    News: CreditReduce

});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;