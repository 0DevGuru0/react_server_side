/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { graphql } from "react-apollo";
import moment from "moment";
import SocketIo from "socket.io-client";
import Header from "./components/header";
import * as actionCreators from "./store/actions";
import pageViews from "./Graphql/mutation/pageViews";
import query from "./Graphql/query/user";

const socket = SocketIo({
	transports: ["websocket"],
	upgrade: false
});

class rootRoute extends Component {
	state = {
		userSign: false
	};

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			// redis Setup
			let key = `pageViews:${moment().format("YYYY/M/D")}`;
			let field = this.props.location.pathname;
			// send to backend for save via Graphql
			this.props.mutate({ variables: { key, field } });
		}
	}

	handleSign = val => {
		this.setState({ userSign: val });
	};

	render() {
		socket.on("connect", () => {
			socket.on("disconnect", () => {
				socket.emit("client", "cl0 disconnected");
			});
		});
		return (
			<div>
				<Header {...this.props} socket={socket} sign={this.state.userSign} />
				{renderRoutes(this.props.route.routes, {
					socket,
					sign: this.handleSign
				})}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchUser: () => dispatch(actionCreators.fetchCurrentUser())
});
const mapStateToProps = ({ auth }) => ({ user: auth.user });
const loadData = ({ dispatch }) => dispatch(actionCreators.fetchCurrentUser());

export default {
	component: connect(
		mapStateToProps,
		mapDispatchToProps
	)(graphql(query)(graphql(pageViews)(rootRoute))),
	loadData
};
