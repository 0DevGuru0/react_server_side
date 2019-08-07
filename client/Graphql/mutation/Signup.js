import gql from 'graphql-tag';

export default gql`
    mutation SignUp($name:String!,$email:String!,$password:String!){
        SignUp(name:$name,email:$email,password:$password){
            _id
            name
            email
        }
    }
`;