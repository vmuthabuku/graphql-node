import mongoose from 'mongoose'
const schema = mongoose.Schema

const userSchema = new schema({
    firstname:{
        type:String

    },
    lastname:{
        type:String

    },
    email:{
        type:String
    },
    game:[{
        ref:'game',
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }]
    })


export default mongoose.model("User", userSchema)