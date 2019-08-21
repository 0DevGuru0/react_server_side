import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import SignUp_mutation from '../../Graphql/mutation/Signup';
import query from '../../Graphql/query/user';
import classes from './signup.css';
class SignUp extends Component{

   state = {
        user:{
            name:'',
            email:'',
            password:''
        },
        errors:[],
        loading:false
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props.data.user !== prevProps.data.user && this.props.data.user){
            this.props.socket.emit('InterUser',{id:this.props.data.user._id,sign:true})
            this.setState({loading:false})
            this.props.history.replace('/')
        }
    }
    submitHandler = (e)=>{
        this.setState({loading:true})
        e.preventDefault()
        const {name,email,password} = this.state.user
        this.props.mutate({
            variables:{name,email,password},
            refetchQueries:[{query}]
        }).catch((e)=>{
            this.setState({loading:false})
            console.log(e)
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
        if(this.state.loading){
            return <div className={classes.loader}>Loading...</div>
        }
        return(
            <div className={classes.container}>
                <div className={classes.errorBox}>
                    <ul> {this.showErrors()} </ul>
                </div>
                <form onSubmit={this.submitHandler}>
                    <label>Name</label>
                    <input id="first_name" type="text" value={this.state.user.name} onChange={val=>this.setState({ user:{...this.state.user, name:val.target.value }})}/>

                    <label>Email:</label>
                    <input id="email" type="email" placeholder="type your email..." value={this.state.user.email} onChange={val=>this.setState({ user:{...this.state.user, email:val.target.value }})}/>

                    <label>Password:</label>
                    <input id="password" name="password" type="password" value={this.state.user.password} onChange={val=>this.setState({ user:{...this.state.user, password:val.target.value }})}/>

                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default {
    component:graphql(query)( graphql(SignUp_mutation)( SignUp ) )
}