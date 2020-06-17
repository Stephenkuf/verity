"use strict";
const DenominationInfo = use("App/Models/DenominationInfo");
const User = use("App/Models/User");
const safeAwait = require("safe-await");

class DenominationController {
  async registerDenomination({
    request,
    response,
    auth
  }) {
    const {
      denomination_name,
      address,
      description,
      denomination_phone,
      slug,
      denomination_email,
      city,
      country,
      designation
    } = request.all();

    const loggedInUser = await auth.current.user;
    // console.log(loggedInUser.id);


    const [lookUpError, lookUp] = await safeAwait(User.findBy("id", loggedInUser.id))

    if (lookUpError) {
      return response.status(400).json({
        error: lookUpError,
        label: `User Lookup`,
        statusCode: 400,
        message: `We were unable to find that User `,
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

    const [denominationError, denomination] = await safeAwait(
      DenominationInfo.create({
        user_id: currentUser.id,
        denomination_name,
        address,
        description,
        denomination_phone,
        slug,
        denomination_email,
        city,
        country,
        designation
      })
    );

    if (denominationError) {
      return response.status(400).json({
        error: denominationError,
        label: `Denomination Registration`,
        statusCode: 400,
        message: `We were unable to Register Denomination`,
      })
    }



    const [registeredError, registered] = await safeAwait(
      User.query()
      .where('id', currentUser.id)
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
      result: denomination,
      label: `Denomination Registeration`,
      statusCode: 200,
      message: `Denomination Registered successfully`,
    })
  }
}

module.exports = DenominationController;
