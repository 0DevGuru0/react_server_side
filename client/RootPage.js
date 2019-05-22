import React ,{Component} from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header'
import {connect} from 'react-redux';
import * as actionCreators from './store/actions'

class rootRoute extends Component {

    componentDidUpdate(prevProps){
        console.log(this.props)
        console.log('previousProp',prevProps)
        // redis Setup
            let key = 'pageViews';
            let field = this.props.location.pathname
        // send to backend for save via Redux
            this.props.pageViews(key,field)
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
    pageViews : (key,field)=>dispatch(actionCreators.pageViews(key,field))
})
const loadData = ({dispatch})=>(
dispatch(actionCreators.fetchCurrentUser())
)
export default {
    component:connect(null,mapDispatchToProps)(rootRoute),
    loadData
}