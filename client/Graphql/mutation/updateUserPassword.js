import gql from 'graphql-tag'

export default gql`
    mutation updateUser($Password:String!,$Email:String!){
        updateUserPassword(password:$Password,email:$Email){
            email
        }
    }
`;
