import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from '../resolvers'

const typeDefs =`
    type gameReviewer{
        id:String
        review:String
        rating:Int
        price:Int
        reviewer:String
        
    }
    type User{
        id:String
        firstname:String
        lastname:String
        email:String
        game:[gameReviewer]

    }
    input UserInput{
        id:String
        firstname:String
        lastname:String
        email:String
        game:[ID!]
    }
    input gameInput{
        id:String
        review:String
        rating:Int
        price:Int
        reviewer:String
       
    }
    type Mutation{
        createUser(input: UserInput) : User
        createGame(input: gameInput): gameReviewer
        deleteUser(id:ID!): User
        updateUser(input: UserInput): User
    }

    type Query {
        getGame(id:ID!):gameReviewer
        owner:User
        getOwners:[User]
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers})

module.exports =  schema