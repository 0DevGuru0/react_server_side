import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user:null
};

const addUserTOState=(state,action)=>({
    ...state,
    user:action.payload
})

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_CURRENT_USER : return addUserTOState(state,action);
        default:return state;
    }
}

export default reducer;