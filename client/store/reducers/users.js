import * as actionTypes from '../actions/actionTypes';

const initialState ={
    usersList:null
}

const addUsersToState =(state,action)=>({
    ...state,
    usersList:action.payload
})

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_USERS : return addUsersToState(state,action);
        default:return state
    }
}
export default reducer ; 