const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
import schema from './schema/schema.js'
const mongoose  = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/graphql',  { useNewUrlParser: true } )

app.get("/",(req,res)=>{
    return res.json({
        message:"Welcome to graph"
    })
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql:true

}))


app.listen(3000, ()=>{
    console.log("running")

})