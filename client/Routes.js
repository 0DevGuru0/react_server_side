import React from 'react';
import Home from './containers/home';
import usersList from './containers/usersList';
import adminsList from './containers/adminsList';
import Root from './RootPage';
import NotFoundPage from './containers/notFoundPage'

export default [{
    component:Root,
    path: '/',
    routes:[
        {
            component:Home,
            path:'/',
            exact:true,
        },
        {
            path:'/users',
            ...usersList
        },
        {
            path:'/admins',
            component:adminsList
        },
        {
            ...NotFoundPage
        }
    ]
}];