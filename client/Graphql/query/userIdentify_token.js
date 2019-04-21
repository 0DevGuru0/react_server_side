import gql from 'graphql-tag'

export default gql`
query UserIdentify($Token:String!){
        identifyUserByToken(token:$Token){
            email
        }
    }
`;