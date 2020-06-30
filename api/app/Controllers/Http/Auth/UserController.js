'use strict'
const AdditionalUserInfo = use("App/Models/AdditionalUserInfo");
const safeAwait = require("safe-await");
const User = use("App/Models/User");


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


  // get profile for authenticated user
  async getUserProfile({
    response,
    auth
  }) {

    const {
      user
    } = auth.current;

    const [getProfileError, getProfile] = await safeAwait(
      User.find(user.id)
      .with("")
      .with("")
      .with("")
    )


  }

}

module.exports = UserController
