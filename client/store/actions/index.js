import * as actionTypes from './actionTypes'

export const
    fetchUsers = ()=>async (dispatch,getState,api)=>{
        const Users = await api.get('/users');
        dispatch({
            type:actionTypes.FETCH_USERS,
            payload:Users.data,
        })
    },

    fetchAdmins = ()=>async (dispatch,getState,api)=>{
        const Admins = await api.get('/admins');
        dispatch({
            type:actionTypes.FETCH_ADMINS,
            payload:Admins,
        })
    },

    fetchCurrentUser = ()=>async (dispatch,getState,api)=>{
        const User = await api.get('/user/api/current_user');
        dispatch({
            type:actionTypes.FETCH_CURRENT_USER,
            payload:User,
        })
    }