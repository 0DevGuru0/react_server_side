import gql from 'graphql-tag';

export default gql`
    mutation SignIn($email:String!,$password:String!){
        SignIn(email:$email,password:$password){
            id
            name
            email
        }
    }
`;