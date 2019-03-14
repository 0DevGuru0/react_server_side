import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../store/actions'
class Header extends Component {
  componentWillMount(){
    this.props.fetchUser()
  }
  onLogoutClick = ()=>{}
  renderButtons=()=>{
    if (this.props.user) {
      return (
        <li><a href="/api/logout">Logout</a></li>
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
            <a href="/api/auth/google">Login</a>
          </li>
        </div>
      );
    }
  }
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps =({auth})=>({user:auth.user})
const mapDispatchToProps = dispatch=>({
  fetchUser : ()=>dispatch(actionCreators.fetchCurrentUser())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)