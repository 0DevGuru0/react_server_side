import React ,{Component} from 'react';
// import { graphql } from 'react-apollo';
// import userIdentifyByToken from '../../Graphql/mutation/userIdentify_token'
class resetPassword extends Component {
    componentWillMount(){
        console.log(this.props.location.search)
        // this.props.mutate({
        //     variables:{token:this.props.location.search.slice(7)},
        // })
    }
    render(){
        const token=this.props.location.search.slice(7);
        return (
            <h1>ok</h1>
        )
    }
}

export default {
    component:
    // graphql(userIdentifyByToken)(
        resetPassword
    // )
};