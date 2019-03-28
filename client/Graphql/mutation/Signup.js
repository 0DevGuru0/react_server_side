import gql from 'graphql-tag';

export default gql`
    mutation SignUp($name:String!,$email:String!,$password:String!){
        SignUp(name:$name,email:$email,password:$password){
            id
            name
            email
        }
    }
`;