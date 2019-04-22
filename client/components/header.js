import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {graphql} from 'react-apollo';
import query from '../Graphql/query/user'
import classes from './header.css';
const Header = (props)=>{
  const renderButtons=()=>{
    if (props.user || props.data.user) {
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
  const emailVerify = ()=>{
    if(props.data.user && props.user){
        if(!props.user.isVerified || !props.data.user.isVerified){
          return <div className={classes.emailVerify}>
              <p>
                please confirm your email verify<a href="/emailVerify">Send Request To My Email</a>
              </p>
            </div>
          }
      }
  }
    return (<div>

      {emailVerify()}
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
    </div>
    );
}

const mapStateToProps =({auth})=>({
  user:auth.user
})
export default connect(mapStateToProps,null)(
  graphql(query)(
    Header
  )
);