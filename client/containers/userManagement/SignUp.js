import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import SignUp_mutation from '../../Graphql/mutation/Signup';
import query from '../../Graphql/query/user'
class SignUp extends Component{

   state={
        user:{
            name:'',
            email:'',
            password:''
        },
        errors:[]
    }
    submitHandler = (e)=>{
        e.preventDefault()
        const {name,email,password} = this.state.user
        this.props.mutate({
            variables:{name,email,password},
            refetchQueries:[{query}]
        })
        .then(()=>{
            this.props.history.replace('/')
        }).catch((e)=>{
            const errors = e.graphQLErrors.map(err=>err.message);
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
            <div className='container'>
             <div>
                <ul>
                    {this.showErrors()}
                </ul>
            </div>
                <form onSubmit={this.submitHandler}>
                    <label>Name</label>
                    <input id="first_name" type="text" value={this.state.user.name} onChange={val=>this.setState({ user:{...this.state.user, name:val.target.value }})}/>

                    <label>Email:</label>
                    <input type="email" placeholder="type your email..." value={this.state.user.email} onChange={val=>this.setState({ user:{...this.state.user, email:val.target.value }})}/>

                    <label>Password:</label>
                    <input name="password" type="password" value={this.state.user.password} onChange={val=>this.setState({ user:{...this.state.user, password:val.target.value }})}/>

                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default {
    component:
    graphql(query)(
        graphql(SignUp_mutation)(
            SignUp
        )
    )
};