import React from 'react';
import { connect } from 'react-redux';
import { CurrentAC, FollowCreator, Following,UnFollowing, FollowProgress, GetUsersThunk, isFetchingAC, onPageChanget, SetCurrent, SetUsers, SetUsersTotalCountAC, UnFollowCreator, GetFriends, SearchUser } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../Preloader/Preloader';
import { UsersApi } from '../../Api/API';
import { getCount, getCurrentPage, getFollowInProgress, getIsFetching, getPage, getUsers } from '../../redux/usurs-selector';
import Paginator from '../Preloader/Paginator';
import { withRouter } from 'react-router-dom';
import Search from '../Preloader/SearchForm';


class UsersAPIContainer extends React.Component {

    componentDidMount(){
        if (this.props.match.path != '/friends'){
        this.props.GetUsersThunk(this.props.currentPage, this.props.page)
    }else {
        this.props.GetFriends(this.props.currentPage, this.props.page)
    }
    }
    path = this.props.match.path;
    onPageChanget = (p) => {
        debugger
        this.props.onPageChanget(p, this.props.currentPage, this.props.page, this.path)
    }
render(){
    return <div>
        <Paginator
        count={this.props.count}
        page={this.props.page}
        currentPage={this.props.currentPage}
        onPageChanget={this.onPageChanget}
      />
      {/* <Search SearchUser={this.props.SearchUser}/> */}
    {this.props.isFetching ? <Preloader/> : 
    <>
    
    <Users count={this.props.count}
    page={this.props.page}
    currentPage={this.props.currentPage}
    onPageChanget={this.onPageChanget}
    Users={this.props.Users}
    Follow={this.props.Follow}
    UnFollow={this.props.UnFollow}
    followInProgress={this.props.followInProgress}
    isFollow={this.props.isFollow}
    Following={this.props.Following}
    UnFollowing={this.props.UnFollowing}

    /> </> }
    
    </div>
}
}

let mapStateToProps = (state) => {
    
    return {
        Users: getUsers(state),
        page: getPage(state),
        count: getCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
}
let mapDispatchToProps = (dispatch) => {
    
//Нужно сократить код засунув весь диспатч объектом в сам коннект!

    return {
        Follow: (id) => {
            
            dispatch(FollowCreator(id))
        },
        UnFollow: (id) => {
            
            dispatch(UnFollowCreator(id))
        },
        SetUsers: (Users) => {
            dispatch(SetUsers(Users));
        },
        SetCurrent: (pageNumber) =>{
            dispatch(SetCurrent(pageNumber))
        },
        SetUsersTotalCountAC: (totalCount) => {
            dispatch(SetUsersTotalCountAC(totalCount))
        },
        isFetchingAC: (isFetching) =>{
            dispatch(isFetchingAC(isFetching))
        },
        isFollow: (id, isFollowProgress)=>{
            dispatch(FollowProgress(id, isFollowProgress))
        },
        GetUsersThunk:(currentPage, page)=>{
            dispatch(GetUsersThunk(currentPage, page))
        },
        onPageChanget:(p, currentPage, page, path)=>{
            dispatch(onPageChanget(p, currentPage, page, path))
        },
        Following:(id)=>{
            dispatch(Following(id))
        },
        UnFollowing:(id)=>{
            dispatch(UnFollowing(id))
        },
        GetFriends:(currentPage, page)=>{
            dispatch(GetFriends(currentPage, page))
        },
        SearchUser:(user) =>{
            dispatch(SearchUser(user))
        }
    }
}
const UsersApiContainerWithRouter = withRouter(UsersAPIContainer)
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainerWithRouter);

export default UsersContainer;