import React , {Component} from 'react';
import { Link }    from 'react-router-dom';
// import {connect}   from 'react-redux';
import {graphql}   from 'react-apollo';
// import query       from '../Graphql/query/user'
import emailVerify from '../Graphql/mutation/emailVerify';
import classes     from './header.css';
class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      email_loading:false,
      emailRequested:false,
    }
  }
  userSocket = ()=>{
    let userId = this.props.user._id || this.props.data.user._id ;
    let sign = this.props.sign
    this.props.socket.emit('clientType','user')
    return this.props.socket.emit('InterUser',{ id:userId, sign }) 
  }
  componentDidMount(){
    if (this.props.user || this.props.data.user) {
      this.userSocket()
    }else{
      this.props.socket.emit('clientType','visitor')
    }
  }
  renderButtons=()=>{
    if (this.props.user || this.props.data.user) {
      if(this.props.sign){ this.userSocket() }
      return (
        <div>
          <li><Link to="/admins">Admins</Link></li>
          <li><a href="/api/logout">Logout</a></li>
        </div>
      );
    } else {
      return (
        <div>
          <li> <Link to="/users">Users</Link> </li>
          <li> <Link to="/admins">Admins</Link> </li>
          <li> <Link to="/Signin">SignIn</Link> </li>
          <li> <Link to="/Signup">SignUp</Link> </li>
          <li> <a href="https://localhost:3000/api/auth/google">Login via google</a> </li>
        </div>
      );
    }
  }
  sendEmail =()=>{
    this.setState({email_loading:true})
    this.props.mutate({
      variables:{ Email : this.props.user.email || this.prop.data.user.email }
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
          <p>please confirm your email verify<button onClick={this.sendEmail}>Send Request To My Email</button></p>
        </div>
      }
    }
  }
  emailSection = ()=>{
    if(this.state.email_loading){

      return <div className={classes.emailVerify}><div className={classes.loader}>Loading...</div></div>

    }else if(this.state.emailRequested){

      return <div className={classes.emailVerify_send}>
          <p>Email send successfully do you want send again__<button onClick={this.sendEmail}>Send Request To My Email</button></p>
      </div>

    }else{
      return this.emailVerify()
    }
  }
  render(){
    debugger;
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
export default graphql( emailVerify )( Header );
