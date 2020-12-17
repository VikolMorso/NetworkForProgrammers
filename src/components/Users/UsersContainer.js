import React from 'react';
import { connect } from 'react-redux';
import { CurrentAC, FollowCreator, Following,UnFollowing, FollowProgress, GetUsersThunk, isFetchingAC, onPageChanget, SetCurrent, SetUsers, SetUsersTotalCountAC, UnFollowCreator } from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../Preloader/Preloader';
import { UsersApi } from '../../Api/API';
import { getCount, getCurrentPage, getFollowInProgress, getIsFetching, getPage, getUsers } from '../../redux/usurs-selector';
import Paginator from '../Preloader/Paginator';


class UsersAPIContainer extends React.Component {

    componentDidMount(){
        this.props.GetUsersThunk(this.props.currentPage, this.props.page);
    //     this.props.Fetching(true);
    // UsersApi.getUsers(this.props.currentPage, this.props.page).then(data => 
    //     {
    //         this.props.Fetching(false);
    //         this.props.SetUsers(data.items)
    //         this.props.SetUsersTotalCount(data.totalCount)
    //     })
        
    }

    onPageChanget = (p) => {
        this.props.onPageChanget(p, this.props.currentPage, this.props.page)
        // this.props.isFetchingAC(true);
        // this.props.SetCurrent(p)
        // UsersApi.getUsers(this.props.currentPage, this.props.page).then(data =>        
        //     {this.props.isFetchingAC(false);
        //     this.props.SetUsers(data.items)
        // })
        

    }
render(){
    return <div>
        <Paginator
        count={this.props.count}
        page={this.props.page}
        currentPage={this.props.currentPage}
        onPageChanget={this.onPageChanget}
      />
    {this.props.isFetching ? <Preloader/> : <Users count={this.props.count}
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

    /> }
    
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
            debugger
            dispatch(FollowProgress(id, isFollowProgress))
        },
        GetUsersThunk:(currentPage, page)=>{
            dispatch(GetUsersThunk(currentPage, page))
        },
        onPageChanget:(p, currentPage, page)=>{
            dispatch(onPageChanget(p, currentPage, page))
        },
        Following:(id)=>{
            dispatch(Following(id))
        },
        UnFollowing:(id)=>{
            dispatch(UnFollowing(id))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;