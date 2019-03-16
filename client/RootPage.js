import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header'
import {connect} from 'react-redux';
import * as actionCreators from './store/actions'

const rootRoute = ({route})=>(
    <div>
        <Header/>
        {renderRoutes(route.routes)}
    </div>
)
const mapDispatchToProps = dispatch=>({
    fetchUser : ()=>dispatch(actionCreators.fetchCurrentUser())
})
const loadData = ({dispatch})=>(
dispatch(actionCreators.fetchCurrentUser())
)
export default {
    component:connect(null,mapDispatchToProps)(rootRoute),
    loadData
}