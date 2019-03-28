import React from 'react';
import Home from './containers/home';
import usersList from './containers/usersList';
import adminsList from './containers/adminsList';
import Root from './RootPage';
import NotFoundPage from './containers/notFoundPage'
import SignIn from './containers/userManagement/SignIn';
import Signup from './containers/userManagement/SignUp';
export default [{
    ...Root,
    path: '/',
    routes:[
        // {
        //     component:Home,
        //     path:'/index.html',
        // },
        {
            path:'/users',
            ...usersList
        },
        {
            path:'/admins',
            ...adminsList
        },
        {
            path:'/signin',
            ...SignIn
        },
        {
            path:'/signup',
            ...Signup
        },
        {
            component:Home,
            path:'/',
        },
        {
            ...NotFoundPage
        }
    ]
}]