'use strict'
const AdditionalUserInfo = use("App/Models/AdditionalUserInfo");
const safeAwait = require("safe-await");
const User = use("App/Models/User");
const Posts = use("App/Models/Post")


class UserController {
  async additionalUserInfo({
    request,
    response,
    auth
  }) {

    try {
      const {
        denomination_id,
        branch_id
      } = request.all();


      const loggedInUser = await auth.current.user;
      // console.log(loggedInUser.id);

      const lookUp = await User.findBy("id", loggedInUser.id)
      if (!lookUp || lookUp == null) {
        return response.status(400).json({
          label: `User Lookup`,
          statusCode: 400,
          message: `We were unable to find that User`,
        })
      }

      lookUp.is_complete_registration = 1

      const saveconfirmation = await lookUp.save()

      if (saveconfirmation == null || !saveconfirmation) {
       return response.status(400).json({
          label: `User registration completion update`,
          statusCode: 400,
          message: `We were unable to update user status `,
        })
      }

      const currentUser = lookUp.toJSON()
      console.log(currentUser.id);

      const additionalInfo = await
      AdditionalUserInfo.create({
        user_id: currentUser.id,
        denomination_id,
        branch_id
      })

      if (!additionalInfo) {
        return response.status(400).json({
          label: `User Addditional Info Registration`,
          statusCode: 400,
          message: `We were unable to add user details`,
        })
      }

      const registered = await
      User.query()
        .where('id', loggedInUser.id)
        .update({
          is_complete_registration: 1
        })

      if (!registered) {
        return response.status(400).json({
          label: `is registered Error`,
          statusCode: 400,
          message: `User fully registered error`
        })
      }

      return response.status(200).json({
        result: additionalInfo,
        label: `User Registration`,
        statusCode: 200,
        message: `User details added  successfully`,
      })
    } catch (error) {
      console.log(error);
      return response.status(200).json({
        error,
        label: `Additional User Info`,
        statusCode: 200,
        message: `Internal Server Error`,
      })
    }
  }

  //GET POSTS FOR AUTHENTICATED USER 
  async getUserPosts({
    response,
    auth
  }) {
    const {
      user
    } = auth.current;

    const getProfile = await
    Posts.query()
      .where("user_id", user.id)
      .with('user')
      .with('comment')
      .withCount("like")
      .fetch()

    if (!getProfile) {
      return response.status(400).json({
        label: `Get User posts`,
        statusCode: 400,
        message: `Get User Posts error`
      })
    }

    return response.status(200).json({
      result: getProfile,
      label: `profile`,
      statusCode: 200,
      message: `User posts fetched successfully`,
    })
  }

  // GET PROFILE for AUTHENTICATED USER
  async getUserProfile({
    response,
    auth
  }) {
    try {
      const {
        user
      } = auth.current;

      const getProfile = await
      User.query()
        .where("id", user.id)
        .with('additionalUserInfo')
        .withCount('posts')
        // .withCount('group')
        .withCount('followers', (builder) => builder.where("user_id", user.id))
        .withCount('following', (builder) => builder.where("follower_id", user.id))
        .fetch()

      if (!getProfile) {
        return response.status(400).json({
          label: `Get User Profile`,
          statusCode: 400,
          message: `Get User Profile error`
        })
      }

      return response.status(200).json({
        result: getProfile,
        label: `profile`,
        statusCode: 200,
        message: `User profile fetched successfully`,
      })

    } catch (error) {
      console.log(error);
      return response.status(200).json({
        error,
        label: `Fetch User Profile`,
        statusCode: 200,
        message: `Internal Server Error`,
      })
    }
  }

 async getAllUsers({request, response , auth}){
  try {

    const {user} = auth.current
  
    const allUsers = await User.query()
    .whereNot("id",user.id)
    .fetch()

    if (!allUsers) {
      return response.status(400).json({
        label: `is registered Error`,
        statusCode: 400,
        message: `User fully registered error`
      })
    }

    return response.status(200).json({
      result: allUsers,
      label: `profile`,
      statusCode: 200,
      message: `User profile fetched successfully`,
    })
  } catch (error) {
    console.log(error);
    return response.status(200).json({
      error,
      label: `Fetch All Users`,
      statusCode: 200,
      message: `Internal Server Error`,
    })
  }
};
}

module.exports = UserController
