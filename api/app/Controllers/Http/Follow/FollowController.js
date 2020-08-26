"use strict";
const User = use("App/Models/User");
const Follower = use("App/Models/Follower");

class FollowController {
  async whoToFollow({
    request,
    response,
    auth
  }) {
    try {
      const {
        user
      } = auth.current;

      // get user ids that the user is following
      const userFollowing = await
      Follower.query()
        .where("follower_id", user.id)
        .pluck("user_id")

      if (!userFollowing) {
        return response.status(400).json({
          label: `User Following`,
          statusCode: 400,
          message: `There was a problem fetching the user following`,
        });
      }


      //  fetch users the currently authenticated user is not already following
      const usersToFollow = await User.query()
        .whereNot("id", user.id)
        .whereNotIn("id", userFollowing)
        .pick(5);


      if (!usersToFollow) {
        return response.status(400).json({
          label: `Who to follow Error`,
          statusCode: 400,
          message: `There was an error Fetching Users  `,
        });
      }



      return response.status(200).json({
        result: usersToFollow,
        label: `Who to follow`,
        statusCode: 400,
        message: `Sucessfully fetched who to follow `,
      });


    } catch (error) {
      console.log(error);
      return response.status(400).json({
        label: `Who to follow`,
        statusCode: 400,
        message: `Internal Server Error `,
      });
    }

  }



  async followUser({
    request,
    response,
    auth
  }) {

    try {
      const {
        user_id
      } = request.all()
      const {
        user
      } = await auth.current


      //Make sure user cannot follow themself
      if (user_id == user.id) {
        return response.status(400).json({
          label: `Follow User Error`,
          statusCode: 400,
          message: `User cannot follow themself`,
        });
      }


      //find or create a particular following 
      const follow = await Follower.findOrCreate({
        user_id: user_id,
        follower_id: user.id
      }, {
        user_id: user_id,
        follower_id: user.id
      })

      if (!follow) {
        return response.status(400).json({
          label: `Follow User`,
          statusCode: 400,
          message: `An Error occurred following that user`,
        });
      }

      return response.status(200).json({
        result: follow,
        label: `Follow User`,
        statusCode: 400,
        message: `User Followed Sucessfully`,
      });

    } catch (error) {
      console.log(error);
      return response.status(400).json({
        label: `Follow User`,
        statusCode: 400,
        message: `Internal Server Error `,
      });
    }

  }
}

module.exports = FollowController;
