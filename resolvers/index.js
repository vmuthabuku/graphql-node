import Game from '../models/game'
import User from '../models/user'

 
export const resolvers = {

    Query:{
        getGame: async(_, {id})=> {
            return await Game.findOne({_id:id})
        },
        owner:()=>{
            return {
                firstname:"Reece",
                lastname:"James",
    
            }
        },
        getOwners:async ()=>{
            return await User.find()
    
        },

    },

    Mutation: {
        createUser:async (_,{input})=>{
            const user = await User.create(input)
            return await User.findOne({_id:user.id}).populate("Game")
        },
        createGame:(_,{input})=>{
           return Promise.resolve(Game.create(input))
        },
        updateUser:async (_, {input}) =>{
            return await User.findOneAndUpdate({_id:input.id}, input,{ useFindAndModify: false })
        },
        deleteUser: async(_, {id}) => {
            return await User.findByIdAndDelete({_id:id}, { useFindAndModify: false })
        }

    }
   
  

}
