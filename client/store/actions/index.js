import axios from 'axios';
import * as actionTypes from './actionTypes'
let Axios = axios.create({
    baseURL:'http://localhost:5000'
})
export const fetchUsers = ()=>async (dispatch,getState,api)=>{
    const Users = await Axios.get('/users');
    dispatch({
        type:actionTypes.FETCH_USERS,
        payload:Users.data,
    })
}
export const fetchAdmins = ()=>async (dispatch,getState,api)=>{
    const Admins = await Axios.get('/admins');
    dispatch({
        type:actionTypes.FETCH_ADMINS,
        payload:Admins,
    })
}
export const fetchCurrentUser = ()=>async (dispatch,getState,api)=>{
    const User = await Axios.get('/user/api/current_user');
    dispatch({
        type:actionTypes.FETCH_CURRENT_USER,
        payload:User,
    })
}