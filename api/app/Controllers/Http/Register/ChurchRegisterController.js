"use strict";
const churchRegister = use("App/Models/ChurchRegister");
const churchRegisterUser = use("App/Models/RegisterUser");
const Database = use("Database");
const User = use("App/Models/User");
const branchInfos = use("App/Models/BranchInfo");
const denomination = use("App/Models/DenominationInfo");

class ChurchRegisterController {
  async createChurchRegister({ request, response, auth }) {
    try {
      let recipient_id;
      const {
        register_name,
        service_id,
        register_date,
        males,
        females,
        total_number,
        re,
      } = request.all();
      const { user } = auth.current;

      // if(!recipient){
      //   return response.status(400).json({
      //       label: `Recipient Information`,
      //       statusCode: 400,
      //        message: `Please enter a recipient destination`,
      //   });
      // }

      const userbranchinfo = await branchInfos.findBy("user_id", user.id);

      const userDenomination = await denomination.findBy(
        "id",
       user.id
      );
      // const denominationInformation = await denomination.findBy(
      //   "id",
      //   userDenomination.user_id
      // );
      if (!userDenomination) {
        return response.status(400).json({
          label: `branch Information`,
          statusCode: 400,
          message: `There was an error fetching user denomination.`,
        });
      }
      recipient_id = userDenomination.user_id;
      // console.log("request title and body", request_title,request_body , recipient_id );
      const churchRegisterCreation = await churchRegister.create({
        // service_id,
        total_members: total_number,
        total_females: females,
        total_males: males,
        register_name,
        register_date,
      });

      if (!churchRegisterCreation) {
        return response.status(400).json({
          label: `Register Creation `,
          statusCode: 400,
          message: `There was an error creating register.`,
        });
      }

      const churchRegisterLog = await churchRegisterUser.findOrCreate({
        register_id: churchRegisterCreation.id,
        sender_id: user.id,
        reciever_id: recipient_id,
      });

      if (!churchRegisterLog) {
        return response.status(400).json({
          label: `Register Creation `,
          statusCode: 400,
          message: `There was an error creating Register.`,
        });
      }

      response.status(200).json({
        label: "Register Creation",
        message: "Register created successfully.",
        data: churchRegisterCreation,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        error,
        label: `Register Creation`,
        statusCode: 500,
        message: `Internal Server Error`,
      });
    }
  }

  //   view Register sent
  async viewChurchRegister({ request, response, auth }) {
    try {
      const { user } = auth.current;

      const churchRegisters = await churchRegisterUser
        .query()
        .where("reciever_id", user.id)
        .orWhere("sender_id", user.id)
        .with("register")
        .fetch();

      if (!churchRegisters) {
        return response.status(400).json({
          label: `View Church Register`,
          statusCode: 400,
          message: `There was an error fetching Register.`,
        });
      }
      response.status(200).json({
        label: "View Church Register",
        message: "Register fetched successfully.",
        data: churchRegisters,
      });
    } catch (ViewRegisterError) {
      console.log(ViewRegisterError);
      return response.status(500).json({
        ViewRegisterError,
        label: `View Church Register`,
        statusCode: 500,
        message: `Internal Server Error`,
      });
    }
  }
}

module.exports = ChurchRegisterController;
