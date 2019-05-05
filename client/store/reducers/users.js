import * as actionTypes from '../actions/actionTypes';

const initialState ={
    usersList:null,
    totalUsers:null,
    hasNextPage:null,
    hasPreviousPage:null,
    currentPage:null,
    lastPage:null
}

const addUsersToState =(state,{payload})=>({
    ...state,
    usersList:payload.Users,
    totalUsers:payload.totalUsers,
    hasNextPage:payload.hasNextPage,
    hasPreviousPage:payload.hasPreviousPage,
    currentPage:payload.currentPage,
    lastPage:payload.lastPage
})

export default (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_USERS : return addUsersToState(state,action);
        default:return state
    }
}