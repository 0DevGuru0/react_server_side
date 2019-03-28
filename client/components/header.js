import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({user})=>{
  const renderButtons=()=>{
    if (user) {
      return (
        <div>
          <li><Link to="/admins">Admins</Link></li>
          <li><a href="/api/logout">Logout</a></li>
        </div>
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
            <Link to="/Signin">SignIn</Link>
          </li>
          <li>
            <Link to="/Signup">SignUp</Link>
          </li>
          <li>
            <a href="/api/auth/google">Login via google</a>
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
export default connect(mapStateToProps,null)(Header);