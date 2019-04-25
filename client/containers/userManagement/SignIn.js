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
        errors: []
    }

    submitHandler = (e)=>{
        e.preventDefault()
        const {email,password} = this.state.user
        this.props.mutate({
            variables:{email,password},
            refetchQueries:[{query}]
        })
        .then(()=>{
            this.props.history.replace('/')
        }).catch((e)=>{
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
    render(){
        return(
                <div className={classes.container}>
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
        )
    }
}

export default {
    component:
    graphql(query)(
        graphql(SignIn_mutation)(
            SignIn
        )
    )
};