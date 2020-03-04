import React, { Component } from "react";
import { graphql } from "react-apollo";
import SignUp_mutation from "../../Graphql/mutation/Signup";
import query from "../../Graphql/query/user";
import classes from "./signup.css";

class SignUp extends Component {
	state = {
		user: {
			name: "",
			email: "",
			password: ""
		},
		errors: [],
		loading: false
	};

	submitHandler = event => {
		this.setState({ loading: true });
		event.preventDefault();
		const { name, email, password } = this.state.user;
		this.props
			.mutate({
				variables: { name, email, password },
				refetchQueries: [{ query }]
			})
			.then(() => {
				this.props.sign(true);
				this.props.socket.emit("SignIn", "exit");
				this.setState({ loading: false });
				this.props.history.replace("/");
			})
			.catch(e => {
				this.setState({ loading: false });
				console.log(e);
				let errors = e.graphQLErrors.map(err => err.message);
				errors = errors[0].split(",");
				this.setState({ errors });
			});
	};

	showErrors = () => {
		const errors = [];
		this.state.errors.map(err => errors.push(<li key={Math.random()}>{err}</li>));
		return errors;
	};

	render() {
		if (this.state.loading) {
			return <div className={classes.loader}>Loading...</div>;
		}
		return (
			<div className={classes.container}>
				<div className={classes.errorBox}>
					<ul> {this.showErrors()} </ul>
				</div>
				<form onSubmit={this.submitHandler}>
					<label>Name</label>
					<input
						id='first_name'
						type='text'
						value={this.state.user.name}
						onChange={val => {
							let name = val.target.value;
							this.setState(prevState => ({
								user: { ...prevState.user, name }
							}));
						}}
					/>

					<label>Email:</label>
					<input
						id='email'
						type='email'
						placeholder='type your email...'
						value={this.state.user.email}
						onChange={val => {
							let email = val.target.value;
							this.setState(prevState => ({
								user: { ...prevState.user, email }
							}));
						}}
					/>

					<label>Password:</label>
					<input
						id='password'
						name='password'
						type='password'
						value={this.state.user.password}
						onChange={val => {
							let password = val.target.value;
							this.setState(prevState => ({
								user: { ...prevState.user, password }
							}));
						}}
					/>

					<button
						className='btn waves-effect waves-light'
						type='submit'
						name='action'>
						Submit
						<i className='material-icons right'>send</i>
					</button>
				</form>
			</div>
		);
	}
}

export default {
	component: graphql(query)(graphql(SignUp_mutation)(SignUp))
};
