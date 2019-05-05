import React ,{Component} from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header'
import {connect} from 'react-redux';
import * as actionCreators from './store/actions'
import openSocket from 'socket.io-client'

class rootRoute extends Component {
    componentDidMount(){
        let socket = openSocket('http://localhost:5000/')
        socket.on('connect',()=>{
            socket.on('client',(res)=>{
                console.log(res)
            })
            socket.emit('name','sajjad')
            socket.on('event',(data)=>{
                console.log('event:'+data)
            })
            socket.on('hi',data=>{
                console.log(data)
            })
        })
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
    fetchUser : ()=>dispatch(actionCreators.fetchCurrentUser())
})
const loadData = ({dispatch})=>(
dispatch(actionCreators.fetchCurrentUser())
)
export default {
    component:connect(null,mapDispatchToProps)(rootRoute),
    loadData
}