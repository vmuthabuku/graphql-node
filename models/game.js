import mongoose from 'mongoose'
const schema = mongoose.Schema

const gameSchema = new schema({
    review:{
        type:String
    },
    rating:{
        type:Number
    },
    price:{
        type:Number
    },
    reviewer:{
        type:String
    }
})

export default mongoose.model("Game", gameSchema)
