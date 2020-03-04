import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import * as actionCreator from "../store/actions";
import requireAuth from "../hoc/requireAuth";
// import $ from 'jquery'
class AdminsListPage extends Component {
	constructor(props) {
		super(props);
		this.headTitle = React.createRef();
	}

	componentDidMount() {
		this.props.FetchAdmins();
		// $(this.headTitle).on('click',()=>{
		//     console.log('head clicked')
		// })
	}

	renderAdmins() {
		if (this.props.admins.length > 0) {
			return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>);
		}
		return <li />;
	}

	render() {
		return (
			<div>
				<Helmet>
					<meta
						content='text/html; charset=UTF-8; X-Content-Type-Options=nosniff'
						httpEquiv='Content-Type'
					/>
				</Helmet>
				<h3 ref={this.headTitle}>Protected list of admins</h3>
				<ul>{this.renderAdmins()}</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ admins }) => ({
	admins: admins.adminsList
});
const mapDispatchToProps = dispatch => ({
	FetchAdmins: () => dispatch(actionCreator.fetchAdmins())
});

const loadData = ({ dispatch }) => dispatch(actionCreator.fetchAdmins());

export default {
	component: requireAuth(
		connect(mapStateToProps, mapDispatchToProps)(AdminsListPage)
	),
	loadData
};
