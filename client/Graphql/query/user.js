import gql from "graphql-tag";

export default gql`
	{
		user {
			_id
			email
			name
			isVerified
		}
	}
`;
