'use strict'
const churchRequests = use("App/Models/Request");
const churchRequestUser = use("App/Models/RequestUser");
const User  = use("App/Models/User")


class ChurchRequestController {
    async createChurchRequest({ request, response, auth }) {
        try {
            const {request_title, request_body , recipient_id} = request.all();
            const {user} = auth.current;
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
         const {user} = auth.current;
         
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
        //   view Requests sent 
        async acceptChurchRequest({ request , response , auth}){
            try {
                const {request_id} = request.all()
                const {user} = auth.current;

            const userCheck = await  churchRequestUser.query()
            .where('request_id', request_id)
            .fetch()
            const userCheckJson = userCheck.toJSON()
            
            if (!userCheck || userCheckJson[0].reciever_id != user.id) {
                return response.status(400).json({
                  label: `Accept Church Requests`,
                  statusCode: 400,
                  message: `Wrong Request details`,
                });
              }

             
              const churchRequestAccept  = await churchRequests.query()
              .where('id', request_id)
              .update({ is_accepted: 1 })

               if (!churchRequestAccept) {
                return response.status(400).json({
                  label: `Accept Church Requests`,
                  statusCode: 400,
                  message: `There was an error accepting request.`,
                });
              }
              response.status(200).json({
                label: "Accept Church Requests",
                message: "Request Accepted",
                data: churchRequestAccept,
              });
        
            } catch (AcceptRequestsError) {
              console.log(AcceptRequestsError);
              return response.status(200).json({
                AcceptRequestsError,
                label: `Accept Church Requests`,
                statusCode: 500,
                message: `Internal Server Error`,
              });
            }
        }

        // reject a request with reasons.
        //Params : id of request 
        //          reject reason
        async rejectChurchRequest({ request , response , auth}){
         try {
            const {request_id, reject_reason} = request.all()
            const {user} = auth.current; 

            const userCheck = await  churchRequestUser.query()
            .where('request_id', request_id)
            .fetch()
            const userCheckJson = userCheck.toJSON()
            
            if (!userCheck || userCheckJson[0].reciever_id != user.id) {
                return response.status(400).json({
                  label: `Reject Church Request`,
                  statusCode: 400,
                  message: `Wrong Request details`,
                });
              }
              const churchRequestReject  = await churchRequests.query()
              .where('id', request_id)
              .update({ 
                  is_accepted: 1, 
                  reject_reason
             })
              
               if (!churchRequestReject) {
                return response.status(400).json({
                  label: `Reject Church Requests`,
                  statusCode: 400,
                  message: `There was an error rejecting request.`,
                });
              }
              response.status(200).json({
                label: "Reject Church Requests",
                message: "Request Rejected",
                data: churchRequestAccept,
              });
            } catch (RejectRequestsError) {
              console.log(RejectRequestsError);
              return response.status(200).json({
                RejectRequestsError,
                label: `Reject Church Requests`,
                statusCode: 500,
                message: `Internal Server Error`,
              });
            }
        }
}

module.exports = ChurchRequestController
