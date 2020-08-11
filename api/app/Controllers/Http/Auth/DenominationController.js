"use strict";
const DenominationInfo = use("App/Models/DenominationInfo");
const User = use("App/Models/User");
const safeAwait = require("safe-await");

class DenominationController {
  async registerDenomination({ request, response, auth }) {
    try {
      const {
        denomination_name,
        address,
        description,
        denomination_phone,
        slug,
        denomination_email,
        city,
        country,
        designation,
      } = request.all();

      const loggedInUser = await auth.current.user;
      // console.log(loggedInUser.id);

      const lookUp = await User.findBy("id", loggedInUser.id);

      if (lookUp == null || !lookUp) {
        return response.status(400).json({
          label: `User Lookup`,
          statusCode: 400,
          message: `We were unable to find that Userr`,
        });
      }

      lookUp.is_complete_registration = 1;

      const saveconfirmation = await lookUp.save();

      if (saveconfirmation == null || !saveconfirmation) {
        return response.status(400).json({
          label: `User registration completion update`,
          statusCode: 400,
          message: `We were unable to update user status `,
        });
      }

      const currentUser = lookUp.toJSON();
      console.log(currentUser.id);

      const denomination = await DenominationInfo.create({
        user_id: currentUser.id,
        denomination_name,
        address,
        description,
        denomination_phone,
        slug,
        denomination_email,
        city,
        country,
        designation,
      });

      if (!denomination || denomination == null) {
        return response.status(400).json({
          error: denomination,
          label: `Denomination Registration`,
          statusCode: 400,
          message: `We were unable to Register Denomination`,
        });
      }

      const registered = await User.query().where("id", currentUser.id).update({
        is_complete_registration: 1,
      });

      if (!registered || registered == null) {
        return response.status(400).json({
          label: `is registered Error`,
          statusCode: 400,
          message: `User fully registered error`,
        });
      }

      return response.status(200).json({
        result: denomination,
        label: `Denomination Registeration`,
        statusCode: 200,
        message: `Denomination Registered successfully`,
      });
    } catch (error) {
      return response.status(400).json({
        error: error,
        label: `is registered Error`,
        statusCode: 400,
        message: `User fully registered error`,
      });
    }
  }
}

module.exports = DenominationController;
