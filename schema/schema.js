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
        firstname:String
        lastname:String
    }
    input UserInput{
        firstname:String
        lastname:String
    }
    type Mutation{
        createUser(input: UserInput) : User
    }

    type Query {
        game:gameReviewer
        owner:User
       owners:[User]
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers})

module.exports =  {schema}