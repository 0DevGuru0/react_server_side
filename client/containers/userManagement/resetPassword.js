import React ,{Component} from 'react';
import { graphql } from 'react-apollo';
import userIdentifyByToken from '../../Graphql/query/userIdentify_token'
import updateUserPassword from '../../Graphql/mutation/updateUserPassword';

class resetPassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            password:'',
            password_copy:''
        }
    }
    formHandler=(e)=>{
        e.preventDefault()
        if(this.state.password == this.state.password_copy){
            if(this.props.data.identifyUserByToken){
                console.log(this.props.data.identifyUserByToken.email)
                this.props.mutate({
                    variables:{
                        Email:this.props.data.identifyUserByToken.email,
                        Password:this.state.password
                    }
                }).then(()=>{
                    this.props.history.replace('/signin')
                })
            }
        }
    }
    render(){
        return (
            <div>
                <h1>Reset Password</h1>
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
                    <button>resetPassword</button>
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