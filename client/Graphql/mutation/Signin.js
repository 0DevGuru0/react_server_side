import gql from "graphql-tag";

export default gql`
	mutation SignIn($email: String!, $password: String!) {
		SignIn(email: $email, password: $password) {
			_id
			name
			email
		}
	}
`;
