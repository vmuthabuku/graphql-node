const users=[]
let user={}
 
export const resolvers = {

    Query:{
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

    },

    Mutation: {
        createUser:({input})=>{
            user = input
            users.push(user)
            return user
        }

    }
   
  

}
