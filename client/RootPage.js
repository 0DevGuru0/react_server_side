import React ,{Component} from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header'
import {connect} from 'react-redux';
import * as actionCreators from './store/actions'

import {graphql} from 'react-apollo';
import pageviews from './Graphql/mutation/pageViews';
import moment from 'moment';
import socketClient from 'socket.io-client';

const socket = socketClient()
class RootRoute extends Component {

    componentDidUpdate(prevProps){
        if(this.props.location.pathname !== prevProps.location.pathname ){
            // redis Setup
                let key = `pageViews:${moment().format("YYYY/M/D")}:`;
                let field = this.props.location.pathname
            // send to backend for save via Graphql
                this.props.mutate({variables:{key,field}})
        }
    }
    
    render(){
        socket.on('connect', ()=>{
            socket.emit('client','client connected')
            socket.on('disconnect',()=>{ socket.emit('client','client disconnected') })
        });
        return (
            <div>
                <Header socket={socket}/>
                {renderRoutes(this.props.route.routes,{socket})}
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
    component:graphql(pageviews)(connect(null,mapDispatchToProps)(RootRoute)),
    loadData
}