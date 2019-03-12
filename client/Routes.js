import React from 'react';
import {Route} from 'react-router-dom';
import App from './app';
import usersList from './containers/usersList';
import adminsList from './containers/adminsList';
import Header from './components/header'
export default ()=>(
    <div>
        <Header/>
        <Route path="/users"  component={usersList}/>
        <Route path="/admins"  component={adminsList}/>
        <Route path="/" exact component={App}/>
    </div>
)