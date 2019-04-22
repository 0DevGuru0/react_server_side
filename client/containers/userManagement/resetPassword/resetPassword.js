import React ,{Component} from 'react';
import { graphql } from 'react-apollo';
import userIdentifyByToken from '../../../Graphql/query/userIdentify_token'
import updateUserPassword from '../../../Graphql/mutation/updateUserPassword';
import classes from './requestToRest.css';

class resetPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            password:'',
            password_copy:'',
            errors:[]
        }
    }
    formHandler=(e)=>{
        e.preventDefault()
        if(this.state.password == '' || this.state.password_copy == ''){
            this.setState({errors:['please fill all credentials']})
        }else if (this.state.password == this.state.password_copy){
            if(this.props.data.identifyUserByToken){
                this.props.mutate({
                    variables:{
                        Email:this.props.data.identifyUserByToken.email,
                        Password:this.state.password
                    }
                }).then(()=>{
                    this.props.history.replace('/signin')
                }).catch((e)=>{
                    const errors = e.graphQLErrors.map(err=>err.message);
                    this.setState({errors});
                })
            }
        }else{
            this.setState({errors:['passwords don\'t match with each other, please try again ']})
        }

    }
    showErrors = ()=>{
        const errors = []
        if(this.state.errors.length > 0 ){
            this.state.errors.map( (err,i)=>errors.push(<div className={classes.errorMsg} key={i}>{err}</div>) )
            return errors
        }
    }
    render(){
        return (
            <div className={classes.container}>
                <h4>Reset Password</h4>
                {this.showErrors()}
                <form onSubmit={this.formHandler}>
                    <input
                        name="password"
                        onChange={e=>this.setState({password:e.target.value})}
                        value={this.state.password}
                        placeholder="new Password"></input>
                    <input
                        name="password_copy"
                        onChange={e=>this.setState({password_copy:e.target.value})}
                        value={this.state.password_copy}
                        placeholder="repeat Password"></input>
                    <button><i className="material-icons">send</i> resetPassword</button>
                </form>
            </div>

        )
    }
}

export default {
    component:
        graphql(userIdentifyByToken, {
            options: (props) => ({
                variables: {
                    Token: props.location.pathname.slice(15)
                }
            })
        })
        (
            graphql(updateUserPassword)(
                resetPassword
            )
        )
};