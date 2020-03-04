import React, { Component } from "react";
import { graphql } from "react-apollo";
import mutation from "../../../Graphql/mutation/sendRequestToRestPass";
import classes from "./requestToRest.css";

class requestToReset extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			errors: [],
			success: ""
		};
	}

	sendRequestToEmail = event => {
		event.preventDefault();
		if (this.state.email !== "") {
			this.props
				.mutate({
					variables: {
						Email: this.state.email
					}
				})
				.then(() => {
					this.setState(prevState => ({
						success: `you are successfully send request to ${prevState.email}`,
						errors: []
					}));
				})
				.catch(e => {
					const errors = e.graphQLErrors.map(err => err.message);
					this.setState({ errors, success: "" });
				});
		} else {
			this.setState({
				errors: ["please type your email,to send request"],
				success: ""
			});
		}
	};

	render() {
		const successMessage = () => {
			if (this.state.success !== "") {
				return <div className={classes.successMsg}>{this.state.success}</div>;
			}
			return undefined;
		};
		const errorMessage = () => {
			if (this.state.errors.length > 0) {
				return this.state.errors.map(el => (
					<div className={classes.errorMsg} key={Math.random()}>
						{el}
					</div>
				));
			}
			return undefined;
		};
		return (
			<div className={classes.container}>
				{successMessage()}
				{errorMessage()}
				<form onSubmit={this.sendRequestToEmail}>
					<label id='email'>Email Address</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email Address...'
						onChange={e => {
							this.setState({ email: e.target.value });
						}}
						value={this.state.email}
					/>
					<button type='button'>
						<i className='material-icons'>send</i>Send Request
					</button>
				</form>
			</div>
		);
	}
}
export default {
	component: graphql(mutation)(requestToReset)
};
