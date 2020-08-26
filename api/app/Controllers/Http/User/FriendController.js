'use strict'
const User = use("App/Models/User");
const Follower = use("App/Models/Follower");



class FriendController {

   // all groups joined by the auth user 
    async getAllFriends({response , auth}){
        try {
            const { user } = auth.current;
        
           const usersFollowed = await Follower.query()
           .where("follower_id",user.id)
           .pluck("user_id")
        
           if(!usersFollowed || usersFollowed == null )
            return response.status(400).json({
              label: `User following Error`,
              statusCode: 400,
              message: `There was an error fetching followed users`
            });
           
            
            //  fetch users following the currently authenticated user
            const friends = await Follower.query()
              .whereIn("follower_id", usersFollowed)
              .andWhere("user_id", user.id)
              .with('users')
               .fetch()
      
            if (!friends) {
              return response.status(400).json({
                label: `friends fetch Error`,
                statusCode: 400,
                message: `There was an error Fetching friends`,
              });
            }
      
            return response.status(200).json({
              result: friends,
              label: `Fetch all friends`,
              statusCode: 200,
              message: `Sucessfully fetched friends `,
            });
           } catch (error) {
            console.log(error);
            return response.status(400).json({
              error,
              label: `Group Join`,
              statusCode: 400,
              message: `Internal Server Error `
            });
           }
  
    }
}

module.exports = FriendController
