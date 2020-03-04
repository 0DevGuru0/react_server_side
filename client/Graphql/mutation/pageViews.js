import gql from "graphql-tag";

export default gql`
	mutation pageViews($field: String!, $key: String!) {
		pageViews(field: $field, key: $key) {
			field
			counted
		}
	}
`;
