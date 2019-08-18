import React , {Component} from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions'
import {Helmet} from "react-helmet";
import classes from './userList.scss';
import paginationList from '../components/pagination';
class UserList extends Component {
    componentDidMount(){
        const array = this.props.location.pathname.split('/')
        let pageNumber = array[3] || 1 ;
        this.props.fetchUsers(pageNumber)
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.location.pathname !== this.props.location.pathname){
            const array = this.props.location.pathname.split('/')
            let pageNumber = array[3] || 1 ;
            this.props.fetchUsers(pageNumber)
        }
    }
    renderUsersList(){
        if(this.props.users !== null){
             return this.props.users.map(user=><li className={classes.list_group_item} key={user._id}>{user.name}</li>)
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
    pagination=()=>{
        /*  Required params for paginationList:
        *   classes     :{pageList,lastPage,nextPage,previousPage,activePage}
        *   props       :{currentPage,lastPage,hasNextPage,hasPreviousPage}
        *   baseAddress :for forwarding user to that page on server
        */
       return paginationList({
            ...this.props,
            classes,
            baseAddress:'/users/page/'
        })
    }
    render(){
        return(
            <div>
                <picture className={[classes.intrinsic,classes.intrinsic__square].join(' ')}>
                    <source media="(min-width: 500px)" srcSet="https://im.rediff.com/getahead/2017/mar/31kerala8.jpg"/>
                    <img className={classes.intrinsic_item} srcSet="https://media.wpri.com/nxs-wpritv-media-us-east-1/photo/2018/11/21/pic%20of%20the%20day%20nov%2021_1542802532936.jpg_62805245_ver1.0_640_360.jpg" alt=""/>
                </picture>
                <h2>UsersList:</h2>
                {this.head()}
                <ul className={classes.list_group}>
                    {this.renderUsersList()}
                </ul>
                <div className={classes.paginationContainer}>
                    <ul className={classes.paginationList}>
                        {this.pagination()}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({users})=>({
    users:users.usersList,
    totalUsers:users.totalUsers,
    hasNextPage:users.hasNextPage,
    hasPreviousPage:users.hasPreviousPage,
    currentPage:users.currentPage,
    lastPage:users.lastPage

})
const mapDispatchToProps = dispatch=>({
    fetchUsers:(pageNum)=>dispatch(actionCreators.fetchUsers(pageNum))
})
const loadData = ({dispatch},pageNum)=>(
    dispatch(   actionCreators.fetchUsers(pageNum)  )
)
export default {
    component:connect(mapStateToProps,mapDispatchToProps)(UserList),
    loadData
}