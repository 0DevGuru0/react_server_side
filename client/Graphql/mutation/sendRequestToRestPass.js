import gql from 'graphql-tag';

export default gql `
    mutation sendRequest($Email:String!){
        sendResetPassEmail(email:$Email){
            email
        }
    }
`