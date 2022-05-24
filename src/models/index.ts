const {  gql } = require('apollo-server');

export * from './User';
export * from './UserLogin'
export * from './Theme'
export * from './Feedback'
export * from './Team'


export const typeDefs = gql`
    type Query{
        _: String
        testQuery: String
        languages: [Language]
    }
    type Mutation {
        _:String
    }
    type Address {
        street: String
        city: String
        state: String
        country: String
        postalCode: String
        latitude: Float
        longitude: Float
    }
    type Language{
        code: String
        name: String
        icon: String
    }
    type i18n {
        en: String
        fr: String
        es: String
        ro: String
        sc: String
        ko: String
        jp: String
    }
`

 


 

