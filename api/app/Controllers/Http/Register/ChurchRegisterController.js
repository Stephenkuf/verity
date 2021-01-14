'use strict'
const churchRegister = use("App/Models/ChurchRegister");
const churchRegisterUser = use("App/Models/RegisterUser");
const Database = use('Database');
const User  = use("App/Models/User")


class ChurchRegisterController {
    async createChurchRegister({ request, response, auth }) {
        try {
        let recipient_id;
            const {register_name, service_id, males, females ,total_number} = request.all();
            const {user} = auth.current;
           
            // if(!recipient){
            //   return response.status(400).json({
            //       label: `Recipient Information`,
            //       statusCode: 400,
            //        message: `Please enter a recipient destination`,
            //   });
            // }

          const userDenomination = await additionalUserInformation.findBy("user_id",  user.id);

          const denominationInformation = await denomination.findBy("id",userDenomination.denomination_id )
          if (!denominationInformation) {
            return response.status(400).json({
              label: `branch Information`,
              statusCode: 400,
              message: `There was an error fetching user denomination.`,
            });
          }
          recipient_id = denominationInformation.user_id;
            // console.log("request title and body", request_title,request_body , recipient_id );
          const churchRegisterCreation = await churchRegister.create({
            service_id,
            total_members, 
            total_females,
            total_males,
            register_name
          })

          if (!churchRegisterCreation) {
            return response.status(400).json({
              label: `Register Creation `,
              statusCode: 400,
              message: `There was an error creating register.`,
            });
          }

          const churchRegisterLog = await churchRegisterUser.findOrCreate({
              register_id:churchRegisterCreation.id,
              sender_id:user.id,
              reciever_id:recipient_id
          })

           if (!churchRegisterLog) {
            return response.status(400).json({
              label: `Register Creation `,
              statusCode: 400,
              message: `There was an error creating Register.`,
            });
          }

          response.status(200).json({
            label: "Register Creation",
            message: "Register created successfully. Await confirmation",
            data: churchRegisterCreation,
          });
    
        } catch (error) {
          console.log(error);
          return response.status(200).json({
            error,
            label: `Register Creation`,
            statusCode: 500,
            message: `Internal Server Error`,
          });
        }
      }
}

module.exports = ChurchRegisterController
