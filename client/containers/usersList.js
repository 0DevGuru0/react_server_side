import React , {Component} from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions'
class UserList extends Component {
    componentDidMount(){
        this.props.fetchUsers()
    }
    renderUsersList(){
        if(this.props.users !== null){
            return this.props.users.map(user=><li className="list-group-item"key={user.id}>{user.name}</li>)
        }
    }
    render(){
        return(
            <ul className="list-group">
                {this.renderUsersList()}
            </ul>
        )
    }
}

const mapStateToProps = ({users})=>({
    users:users.usersList
})
const mapDispatchToProps = dispatch=>({
    fetchUsers:()=>dispatch(actionCreators.fetchUsers())
})

const loadData = ({dispatch})=>(dispatch(actionCreators.fetchUsers()))

export default ({
    component:connect(mapStateToProps,mapDispatchToProps)(UserList),
    loadData
});