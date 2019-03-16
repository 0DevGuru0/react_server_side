import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreator from '../Store/actions';
import requireAuth from '../hoc/requireAuth'
class AdminsListPage extends Component {
    componentDidMount(){
        this.props.FetchAdmins()
    }
    renderAdmins(){
        if(this.props.admins.length > 0){
            return this.props.admins.map(admin=><li key={admin.id}>{admin.name}</li>);
        }
    }
    render(){
        return(
            <div>
                <h3>Protected list of admins</h3>
                <ul>
                    {this.renderAdmins()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps=({admins})=>({
    admins:admins.adminsList
})
const mapDispatchToProps = dispatch=>({
    FetchAdmins:()=>dispatch(actionCreator.fetchAdmins())
})

const loadData = ({dispatch})=>(
    dispatch(actionCreator.fetchAdmins())
)
export default {
    component:connect(mapStateToProps,mapDispatchToProps)(
        requireAuth(AdminsListPage)
    ),
    loadData
}