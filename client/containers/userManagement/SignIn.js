import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import SignIn_mutation from '../../Graphql/mutation/Signin';
import query from '../../Graphql/query/user'
import classes from './signin.css';

class SignIn extends Component{

    state = {
        user: {
            email: '', 
            password: ''
        },
        errors: [],
        loading:false
    }
    // componentDidUpdate(prevProps,prevState){
    //     if(this.props.data.user !== prevProps.data.user && this.props.data.user){
    //         // this.props.socket.emit('User',{
    //         //     id:this.props.data.user._id,
    //         //     credential:'signedIn'
    //         // })
            
    //     }
    // }

    submitHandler = (e)=>{
        this.setState({loading:true})
        e.preventDefault()
        const {email,password} = this.state.user
        this.props.mutate({
            variables:{email,password},
            refetchQueries:[{query}]
        }).then(()=>{
            this.props.sign(true)
            this.props.socket.emit('SignIn','exit')
            this.setState({loading:false})
            this.props.history.replace('/')
        }).catch((e)=>{
            this.setState({loading:false})
            let errors = e.graphQLErrors.map(err=>err.message);
            errors = errors[0].split(',')
            this.setState({errors});
        })
    }
    showErrors = ()=>{
        const errors = []
        this.state.errors.map( (err,i)=>errors.push(<li key={i}>{err}</li>) )
        return errors
    }
    signInForm=()=>{
        if(this.state.loading){
          
            return <div className={classes.loader}>Loading...</div>
        }else{
            return ( <div>
                <div className={classes.container}>
                <h2>SignIn</h2>
                <div className={classes.errorBox}>
                    <ul>{this.showErrors()}</ul>
                </div>
                    <form onSubmit={this.submitHandler}>
                        <label>Email:</label>
                        <input type="email" placeholder="type your email..." value={this.state.user.email} onChange={val=>this.setState({ user:{...this.state.user, email:val.target.value }})}/>
                        <label>Password:</label>
                        <input name="password" type="password" value={this.state.user.password} onChange={val=>this.setState({ user:{...this.state.user, password:val.target.value }})}/>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                    <a href="/request_resetPass">forgot your password?</a>
                </div>
            </div>
            )
        }
    }
    render(){
        return( this.signInForm() )
    }
}

export default {
    component:
    // graphql(query)(
        graphql(SignIn_mutation)(
            SignIn
        )
    // )
};