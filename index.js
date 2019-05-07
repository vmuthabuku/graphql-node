const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
import schema from './schema/schema.js'

app.get("/",(req,res)=>{
    return res.json({
        message:"Welcome to graph"
    })
})
const users=[]
let user={}
 
const root = {
    game:()=> {
        return {
            id:"6555",
            review:"Fantastic Game",
            rating:6,
            price:1200,
            reviewer:"James Jones"
        }
    },
    owner:()=>{
        return {
            firstname:"Reece",
            lastname:"James",

        }
    },
    owners:()=>{
        return users

    },
    createUser:({input})=>{
        user = input
        users.push(user)
        return user
    }

}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue:root,
    graphiql:true

}))


app.listen(3000, ()=>{
    console.log("running")

})