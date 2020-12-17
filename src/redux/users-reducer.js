import { UsersApi } from "../Api/API";

let initialState = {
    Users: [],
    page: 5,
    count: 10,
    currentPage: 1,
    isFetching: false,
    followInProgress: []

}
const usersReduce = (state = initialState, action) => {

    if (action.type === "FOLLOW") {
        let copyState = {
            ...state,
            Users: state.Users.map(u => {
                if (u.id === action.id) {
                    let cState = { ...u, followed: false };

                    return cState;
                };

                return u;
            })

        };
        return copyState;
    } else if (action.type === "UNFOLLOW") {
        let copyState = {
            ...state,
            Users: state.Users.map(u => {
                if (u.id === action.id) {
                    let cState = { ...u, followed: true }

                    return cState
                };

                return u;
            })
        }
        return copyState;
    } else if (action.type === "SET-USERS") {

        let statec = { ...state, Users: action.Users }

        return statec;
    } else if (action.type === "SET_CURRENT") {
        return { ...state, currentPage: action.currentPage }
    } else if (action.type === "SET_USER_TOTAL_COUNT") {
        return { ...state, count: action.count }
    } else if (action.type === "IS_FETCHING") {
        let copyState = { ...state, isFetching: action.isFetching }
        return copyState;
    } else if (action.type === 'FOLLOW_PROGRESS') {
        return {
            ...state,
            followInProgress: action.isFollow ? [...state.followInProgress, action.id] : state.followInProgress.filter(id => id !== action.id)
        }

    }
    return state;
}


const IS_FETCHING = 'IS_FETCHING'
const SET_CURRENT = 'SET_CURRENT'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT'
const FOLLOW_PROGRESS = 'FOLLOW_PROGRESS';
export const isFetchingAC = (isFetching) => (
    {

        type: IS_FETCHING,
        isFetching: isFetching
    })
export const SetCurrent = (currentPage) => ({
    type: SET_CURRENT,
    currentPage: currentPage
})
export const FollowCreator = (id) => ({

    type: FOLLOW,
    id: id
});
export const UnFollowCreator = (id) => ({

    type: UNFOLLOW,
    id: id
});
export const SetUsers = (Users) => ({
    type: SET_USERS,
    Users: Users
});
export const SetUsersTotalCountAC = (totalCount) => ({
    type: SET_USER_TOTAL_COUNT,
    count: totalCount
})
export const FollowProgress = (id, isFollow) => ({
    type: FOLLOW_PROGRESS,
    id,
    isFollow
})

export const GetUsersThunk = (currentPage, page) => {
    return (dispatch) => {
        dispatch(isFetchingAC(true));
        UsersApi.getUsers(currentPage, page).then(data => {
            dispatch(isFetchingAC(false));
            dispatch(SetUsers(data.items))
            dispatch(SetUsersTotalCountAC(data.totalCount))
        })
    }
}
export const onPageChanget = (p, currentPage, page) => {
    return async (dispatch) => {
        dispatch(isFetchingAC(true));
        dispatch(SetCurrent(p))
        let data = await UsersApi.getUsers(currentPage, page)
            dispatch(isFetchingAC(false));
            dispatch(SetUsers(data.items))
        
    }
}

const FollowUnFollow = async (dispatch, id, creator, api) => {
    dispatch(FollowProgress(id, true))
        let response = await api(id)
            dispatch(creator(id))
            dispatch(FollowProgress(id, false))
}

export const Following = (id) => {
    return async (dispatch) => {
        FollowUnFollow(dispatch, id, FollowCreator, UsersApi.follow.bind(UsersApi))
    }
}
export const UnFollowing = (id) => {
    return async (dispatch) => {
        FollowUnFollow(dispatch, id, UnFollowCreator, UsersApi.unFollow.bind(UsersApi))
    }
}
export default usersReduce;