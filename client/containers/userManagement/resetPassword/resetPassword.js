import React, { Component } from "react";
import { graphql } from "react-apollo";
import userIdentifyByToken from "../../../Graphql/query/userIdentify_token";
import updateUserPassword from "../../../Graphql/mutation/updateUserPassword";
import classes from "./requestToRest.css";

class resetPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			password: "",
			password_copy: "",
			errors: []
		};
	}

	formHandler = event => {
		event.preventDefault();
		const { password, password_copy } = this.state;
		const { identifyUserByToken, mutate, history } = this.props.data;
		if (password === "" || password_copy === "") {
			this.setState({ errors: ["please fill all credentials"] });
		} else if (password === password_copy) {
			if (identifyUserByToken) {
				mutate({
					variables: {
						Email: identifyUserByToken.email,
						Password: password
					}
				})
					.then(() => {
						history.replace("/signin");
					})
					.catch(e => {
						const errors = e.graphQLErrors.map(err => err.message);
						this.setState({ errors });
					});
			}
		} else {
			this.setState({
				errors: ["passwords don't match with each other, please try again "]
			});
		}
	};

	showErrors = () => {
		const errors = [];
		if (this.state.errors.length > 0) {
			this.state.errors.map(err =>
				errors.push(
					<div className={classes.errorMsg} key={Math.random()}>
						{err}
					</div>
				)
			);
			return errors;
		}
		return null;
	};

	render() {
		return (
			<div className={classes.container}>
				<h4>Reset Password</h4>
				{this.showErrors()}
				<form onSubmit={this.formHandler}>
					<input
						name='password'
						onChange={e => this.setState({ password: e.target.value })}
						value={this.state.password}
						placeholder='new Password'
					/>
					<input
						name='password_copy'
						onChange={e => this.setState({ password_copy: e.target.value })}
						value={this.state.password_copy}
						placeholder='repeat Password'
					/>
					<button type='button'>
						<i className='material-icons'>send</i> resetPassword
					</button>
				</form>
			</div>
		);
	}
}

export default {
	component: graphql(userIdentifyByToken, {
		options: props => ({
			variables: { Token: props.location.pathname.slice(15) }
		})
	})(graphql(updateUserPassword)(resetPassword))
};
