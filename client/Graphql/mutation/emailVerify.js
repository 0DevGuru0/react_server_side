import gql from "graphql-tag";

export default gql`
	mutation emailVerify($Email: String!) {
		sendEmailVerify(email: $Email) {
			email
		}
	}
`;
