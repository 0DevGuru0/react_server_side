import React ,{Component} from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header'
import {connect} from 'react-redux';
import * as actionCreators from './store/actions'

import {graphql} from 'react-apollo';
import pageviews from './Graphql/mutation/pageViews'
class rootRoute extends Component {

    componentDidUpdate(prevProps){
        if(this.props.location.pathname !== prevProps.location.pathname ){
            // redis Setup
                let key = 'pageViews';
                let field = this.props.location.pathname
            // send to backend for save via Graphql
                this.props.mutate({variables:{key,field}})
        }
    }
    render(){
        return (
            <div>
                <Header/>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>({
    fetchUser : ()=>dispatch(actionCreators.fetchCurrentUser()),
})
const loadData = ({dispatch})=>(
dispatch(actionCreators.fetchCurrentUser())
)
export default {
    component:graphql(pageviews)(connect(null,mapDispatchToProps)(rootRoute)),
    loadData
}