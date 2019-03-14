import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
const Header = ({user})=>{
  console.log(user)
    const onLogoutClick = ()=>{}
    const renderButtons=()=>{
      if (user) {
        return (
          <li><a onClick={onLogoutClick()}>Logout</a></li>
        );
      } else {
        return (
          <div>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/admins">Admins</Link>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </div>
        );
      }
    }
    return (
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo left">
              Home
            </Link>
            <ul className="right">
              {renderButtons()}
            </ul>
          </div>
        </nav>
      );
}

const mapStateToProps =({auth})=>({user:auth.user})

export default connect(mapStateToProps,null)(Header)