"use strict";
const DenominationInfo = use("App/Models/DenominationInfo");
const User = use("App/Models/User");
const UserRole = use("App/Models/UserRole");
const safeAwait = require("safe-await");

class DenominationController {
  async registerDenomination({ request, response, auth }) {
    const {user} = await auth.current;
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


      const denominationString = await UserRole.findBy("role_label", "Denomination")

      const denomination = await DenominationInfo.create({
        user_id: user.id,
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

      const registered = await User.query().where("id", user.id).update({
        is_complete_registration: 1,
        user_role_id:denominationString.id

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
