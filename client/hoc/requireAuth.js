import React,{Component} from 'react';
import {connect} from 'react-redux';
export default ChildComponent=>{
    class requireAuth extends Component{
        render(){
            switch (this.props.auth) {
                case false:
                    return <div>you Should logIn</div>
                default:
                    return <ChildComponent {...this.props}/>;
            }
        }
    }
    const mapStateToProp = ({auth})=>({auth:auth.user})
    return connect(mapStateToProp,null)(requireAuth)
}
