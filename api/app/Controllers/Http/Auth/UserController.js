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

    // const user = await auth.current;
    const [lookUpError, lookUp] = await safeAwait(User.findBy("phone_number", user_phone))

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

    return response.status(200).json({
      result: additionalInfo,
      label: `User Registration`,
      statusCode: 200,
      message: `User details added  successfully`,
    })
  }


}

module.exports = UserController
