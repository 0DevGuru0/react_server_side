import React , {Component} from 'react';
import { Link }    from 'react-router-dom';
import {connect}   from 'react-redux';
import {graphql}   from 'react-apollo';
import query       from '../Graphql/query/user'
import emailVerify from '../Graphql/mutation/emailVerify';
import classes     from './header.css';

class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      email_loading:false,
      emailRequested:false
    }
  }
  renderButtons=()=>{
    if (this.props.user || this.props.data.user) {
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
  sendEmail =()=>{
    this.setState({email_loading:true})
    this.props.mutate({
      variables:{ Email : this.props.user.email }
    }).then(()=>{
     this.setState({emailRequested:true,email_loading:false})
    }).catch(e=>{
      console.log(e)
      this.setState({emailRequested:false,email_loading:false})
    })
  }
  emailVerify = ()=>{
    if(this.props.data.user && this.props.user){
      if(!this.props.user.isVerified || !this.props.data.user.isVerified){
        return <div className={classes.emailVerify}>
          <p>please confirm your email verify<a href="#" onClick={this.sendEmail}>Send Request To My Email</a></p>
        </div>
      }
    }
  }
  emailSection = ()=>{
    if(this.state.email_loading){

      return <div className={classes.emailVerify}><div className={classes.loader}>Loading...</div></div>

    }else if(this.state.emailRequested){

      return <div className={classes.emailVerify_send}>
          <p>Email send successfully do you want send again__<a href="#" onClick={this.sendEmail}>Send Request To My Email</a></p>
      </div>

    }else{
      return this.emailVerify()
    }
  }
  render(){
    return (
    <div>
      {this.emailSection()}
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left"> Home </Link>
          <ul className="right"> {this.renderButtons()} </ul>
        </div>
      </nav>
    </div>
    );
  }
}

const mapStateToProps =({auth})=>({user:auth.user})
export default connect(mapStateToProps,null)(
  graphql(query)(
    graphql(emailVerify)(
      Header
    )
  )
);