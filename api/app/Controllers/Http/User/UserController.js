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
    const {
      denomination_id,
      location,
      bio,
      profile_pic,
      user_phone
    } = request.all();


    const loggedInUser = await auth.current.user;
    // console.log(loggedInUser.id);


    const [lookUpError, lookUp] = await safeAwait(User.findBy("id", loggedInUser.id))

    if (lookUpError) {
      return response.status(400).json({
        error: lookUpError,
        label: `User Lookup`,
        statusCode: 400,
        message: `We were unable to find that User`,
      })
    }
    if (lookUp == null) {
      return response.status(400).json({
        error: lookUpError,
        label: `User Lookup`,
        statusCode: 400,
        message: `We were unable to find that Userr`,
      })

    }
    const currentUser = lookUp.toJSON()
    console.log(currentUser.id);

    const [additionalInfoError, additionalInfo] = await safeAwait(
      AdditionalUserInfo.create({
        user_id: currentUser.id,
        denomination_id,
        location,
        bio,
        profile_pic
      })
    );

    if (additionalInfoError) {
      return response.status(400).json({
        error: additionalInfoError,
        label: `User Addditional Info Registration`,
        statusCode: 400,
        message: `We were unable to add user details`,
      })
    }

    const [registeredError, registered] = await safeAwait(
      User.query()
      .where('id', loggedInUser.id)
      .update({
        is_complete_registration: 1
      })
    )
    if (registeredError) {
      return response.status(400).json({
        error: registeredError,
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
  }


  //GET POSTS FOR AUTHENTICATED USER 
  async getUserPosts({
    response,
    auth
  }) {
    const {
      user
    } = auth.current;

    const [getPostsError, getProfile] = await safeAwait(
      Posts.query()
      .where("id", user.id)
      .with('user')
      .with('comment')
      .withCount("like")
      .fetch()
    )
    if (getPostsError) {
      return response.status(400).json({
        error: getPostsError,
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
    const {
      user
    } = auth.current;

    const [getProfileError, getProfile] = await safeAwait(
      User.query()
      .where("id", user.id)
      .with('additionalUserInfo')
      .withCount('posts')
      // .withCount('group')
      .withCount('followers', (builder) => builder.where("user_id", user.id))
      .withCount('following', (builder) => builder.where("follower_id", user.id))
      .fetch()
    )
    if (getProfileError) {
      console.log(getProfileError);

      return response.status(400).json({
        error: getProfileError,
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
  }



}

module.exports = UserController
