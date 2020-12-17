import React from 'react';
import Navigation from './components/Navigation/Navigation';
import {Provider} from "react-redux"
import Settings from './components/Settings/Settings';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {InitialApp} from './redux/app-reducer'
import Preloader from './components/Preloader/Preloader';
import store from './redux/store-redux';

const News = React.lazy( () =>  import ('./components/News/News'))
const Music = React.lazy( () =>  import ('./components/Music/Music'))

class App extends React.Component {
    
    componentDidMount(){
        this.props.InitialApp()
        
    }
    render(){
        if (!this.props.inition){
             return <Preloader />}
    return (<HashRouter >

        <div className="main" >
            <HeaderContainer/>
            <div className="content" >
                <Navigation  />
                {/* Sidebar={this.props.appState.Sidebar} */}
                <Route path="/Profile/:idUser?" render={() => < ProfileContainer store={this.props.store}  />} />
                <Route path="/Dialogs" render={() => < DialogsContainer store={this.props.store}  />} />
                <Route path="/login" render={()=> <Login/>}/>
                <Route path="/News" render={() =>  <React.Suspense fallback = {<div>Loading</div>}>< News /></React.Suspense>} />
                <Route path="/Music" render={() => <React.Suspense fallback = {<div>Loading</div>}>< Music /></React.Suspense>} />
                <Route path="/Settings" render={() => < Settings />} />
                <Route path="/Users" render={()=> <UsersContainer store={this.props.store}/>} />
            </div>
        </div>
    </HashRouter>
    );
}
}
let mapStateToProps = (state) =>({
    inition: state.App.inition
})
const AppContainer = compose(connect(mapStateToProps, {InitialApp}))(App);

export const AppNewContainer = (props) =>{
    return <React.StrictMode>
    <Provider store={store}>
      <AppContainer {...props}/>
    </Provider>
  </React.StrictMode>
}