import * as actionTypes from '../actions/actionTypes';

const initialState = {
    adminsList:{}
}

const SET_ADMINS = (state,action)=>(
    {
       ...state,
       adminsList:action.payload
    }
)
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_ADMINS:return SET_ADMINS(state,action);
        default:return state;
    }
}

export default reducer;