export const getUsers = (state) =>{
    return state.UsersPage.Users
}

export const getPage = (state) =>{
    return state.UsersPage.page
}

export const getCount = (state) =>{
    return state.UsersPage.count
}

export const getCurrentPage = (state) =>{
    return state.UsersPage.currentPage
}

export const getIsFetching = (state) =>{
    return state.UsersPage.isFetching
}

export const getFollowInProgress = (state) =>{
    return state.UsersPage.followInProgress
}

