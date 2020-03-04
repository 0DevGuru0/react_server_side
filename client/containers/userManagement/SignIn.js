import React, { Component } from "react";
import { graphql } from "react-apollo";
import SignIn_mutation from "../../Graphql/mutation/Signin";
import query from "../../Graphql/query/user";
import classes from "./signin.css";

class SignIn extends Component {
	state = {
		user: {
			email: "",
			password: ""
		},
		errors: [],
		loading: false
	};
	// componentDidUpdate(prevProps,prevState){
	//     if(this.props.data.user !== prevProps.data.user && this.props.data.user){
	//         // this.props.socket.emit('User',{
	//         //     id:this.props.data.user._id,
	//         //     credential:'signedIn'
	//         // })

	//     }
	// }

	submitHandler = event => {
		this.setState({ loading: true });
		event.preventDefault();
		const { email, password } = this.state.user;
		this.props
			.mutate({
				variables: { email, password },
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

	signInForm = () => {
		if (this.state.loading) {
			return <div className={classes.loader}>Loading...</div>;
		}
		return (
			<div>
				<div className={classes.container}>
					<h2>SignIn</h2>
					<div className={classes.errorBox}>
						<ul>{this.showErrors()}</ul>
					</div>
					<form onSubmit={this.submitHandler}>
						<label htmlFor='email'>Email:</label>
						<input
							id='email'
							type='email'
							placeholder='type your email...'
							value={this.state.user.email}
							onChange={e => {
								let email = e.currentTarget.value;
								this.setState(prevState => ({
									user: { ...prevState.user, email }
								}));
							}}
						/>

						<label>Password:</label>
						<input
							name='password'
							type='password'
							value={this.state.user.password}
							onChange={val => {
								let password = val.currentTarget.value;
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
					<a href='/request_resetPass'>forgot your password?</a>
				</div>
			</div>
		);
	};

	render() {
		return this.signInForm();
	}
}

export default {
	component:
		// graphql(query)(
		graphql(SignIn_mutation)(SignIn)
	// )
};
