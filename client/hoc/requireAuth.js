import React,{Component} from 'react';
import {connect} from 'react-redux';
import {graphql} from 'react-apollo';
import query from '../Graphql/query/user'
export default ChildComponent=>{
    class requireAuth extends Component{
        render(){
            switch (this.props.auth || this.props.data.user) {
                case false:
                    return <div>you Should logIn</div>
                default:
                    return <ChildComponent {...this.props}/>;
            }
        }
    }
    const mapStateToProp = ({auth})=>({auth:auth.user})
    return connect(mapStateToProp,null)(
        graphql(query)(requireAuth)
    )
}
