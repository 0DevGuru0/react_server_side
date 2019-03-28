import React , {Component} from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions'
import {Helmet} from "react-helmet";
class UserList extends Component {
    componentWillMount(){
        this.props.fetchUsers()
    }
    renderUsersList(){
        if(this.props.users !== null){
             return this.props.users.map(user=><li className="list-group-item"key={user.id}>{user.name}</li>)
        }
    }
    head=()=>{
        if(this.props.users){
            return (<Helmet>
                <title>{`(${this.props.users.length})_User list`}</title>
                <meta name="description" content="Helmet application" />
                <meta property="og:title" content="The Rock" />
                <meta property="og:type" content="video.movie" />
                <meta property="og:url" content="http://www.imdb.com/title/tt0117500/" />
                <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />
            </Helmet>)
        }
    }
    render(){
        return(
            <div>
                {this.head()}
                <ul className="list-group">
                    {this.renderUsersList()}
                </ul>
            </div>
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