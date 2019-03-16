import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
export default ChildComponent=>{
    class requireAuth extends Component{
        render(){
            switch (this.props.auth) {
                case false:
                    return <Redirect to="/" />
                default:
                    return <ChildComponent {...this.props} />;
            }
        }
    }
    const mapStateToProp = ({auth})=>({auth:auth.user})
    return connect(mapStateToProp,null)(requireAuth)
}
