'use strict'
const churchRequests = use("App/Models/Request");
const churchRequestUser = use("App/Models/RequestUser");
const User  = use("App/Models/User")


class ChurchRequestController {
    async createChurchRequest({ request, response, auth }) {
        try {
            const {request_title, request_body , recipient_id} = request.all();
            const {user} = request.all();
          const churchRequestCreation = await churchRequests.create({
            request_title, 
            request_body
          })

          if (!churchRequestCreation) {
            return response.status(400).json({
              label: `Request Creation `,
              statusCode: 400,
              message: `There was an error creating request.`,
            });
          }

          const churchRequestLog = await churchRequestUser.findOrCreate({
              request_id:churchRequestCreation.id,
              sender_id:user.id,
              reciever_id:recipient_id
          })

           if (!churchRequestLog) {
            return response.status(400).json({
              label: `Request Creation `,
              statusCode: 400,
              message: `There was an error creating request.`,
            });
          }

          response.status(200).json({
            label: "Request Creation",
            message: "Request created successfully. Await confirmation",
            data: churchRequestCreation,
          });
    
        } catch (error) {
          console.log(error);
          return response.status(200).json({
            error,
            label: `Request Creation`,
            statusCode: 500,
            message: `Internal Server Error`,
          });
        }
      }

    //   view Requests sent 
    async viewChurchRequests({request , response , auth}){
        try {
            const {user} = request.all();
         
          const churchRequests = await churchRequestUser.query()
          .where("reciever_id", user_id)
          .orWhere("sender_id", user_id)
          .with("requests")
          .query()

           if (!churchRequestCreation) {
            return response.status(400).json({
              label: `View Church Requests`,
              statusCode: 400,
              message: `There was an error fetching request.`,
            });
          }
          response.status(200).json({
            label: "View Church Requests",
            message: "Requests fetched successfully.",
            data: churchRequests,
          });
    
        } catch (ViewRequestsError) {
          console.log(ViewRequestsError);
          return response.status(200).json({
            ViewRequestsError,
            label: `View Church Requests`,
            statusCode: 500,
            message: `Internal Server Error`,
          });
        }
    }
}

module.exports = ChurchRequestController
