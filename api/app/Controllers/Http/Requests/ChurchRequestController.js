'use strict'
const churchRequests = use("App/Models/Request");
const churchRequestUser = use("App/Models/RequestUser");
const User  = use("App/Models/User")
const branches = use("App/Models/BranchInfo");
const denomination = use("App/Models/DenominationInfo");
const additionalUserInformation = use("App/Models/AdditionalUserInfo");



class ChurchRequestController {
    async createChurchRequest({ request, response, auth }) {
        try {
        let recipient_id;
            const {request_title, request_body , recipient} = request.all();
            const {user} = auth.current;

  
            if(!recipient){
              return response.status(400).json({
                  label: `Recipient Information`,
                  statusCode: 400,
                   message: `Please enter a recipient destination`,
              });
            }

        if(recipient == "branch"){
          const userBranch = await additionalUserInformation.findBy("user_id",  user.id)
          if (!userBranch) {
            return response.status(400).json({
              label: `branch Information`,
              statusCode: 400,
              message: `Could not find user branch.`,
            });
          }
          const branchInformation = await branches.findBy("id",userBranch.branch_id )

          if (!branchInformation) {
            return response.status(400).json({
              label: `Branch Information`,
              statusCode: 400,
              message: `There was an error fetching Branch Information`,
            });
          }
          recipient_id = branchInformation.user_id;

        }
        if(recipient == "denomination"){
          const userDenomination = await additionalUserInformation.findBy("user_id",  user.id)

          const denominationInformation = await denomination.findBy("id",userDenomination.denomination_id )
          if (!branchInformation) {
            return response.status(400).json({
              label: `branch Information`,
              statusCode: 400,
              message: `There was an error fetching user branch.`,
            });
          }
          recipient_id = denominationInformation.user_id;
        }

            // console.log("request title and body", request_title,request_body , recipient_id );
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
          console.log("request log details", churchRequestCreation.id , recipient_id); 

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
          .where("reciever_id", user.id)
          .orWhere("sender_id", user.id)
          .with("requests")
          .fetch()

           if (!churchRequests) {
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
              async viewAcceptedRequests({request , response , auth}){
                try {
                const {user} = auth.current;
                
                  const churchRequests = await churchRequestUser.query()
                  .where(function () {
                    this.where("reciever_id", user.id).andWhere("is_accepted", 1);
                  })
                  .orWhere(function () {
                    this.whereIn("sender_id", user.id).andWhere("is_accepted", 1)
                  })
                  .with("requests")
                  .fetch()

                  if (!churchRequests) {
                    return response.status(400).json({
                      label: `View Church Requests`,
                      statusCode: 400,
                      message: `There was an error fetching accepted requests.`,
                    });
                  }
                  response.status(200).json({
                    label: "View Church Requests",
                    message: "Accepted Requests fetched successfully.",
                    data: churchRequests,
                  });
            
                } catch (ViewRequestsError) {
                  console.log(ViewRequestsError);
                  return response.status(200).json({
                    ViewRequestsError,
                    label: `View Accepted Church Requests`,
                    statusCode: 500,
                    message: `Internal Server Error`,
                  });
                }
            }


            //   view Requests sent 
            async viewAcceptedRequests({request , response , auth}){
              try {
              const {user} = auth.current;
              
                const churchRequests = await churchRequestUser.query()
                .where(function () {
                  this.where("reciever_id", user.id).andWhere("is_rejected", 1);
                })
                .orWhere(function () {
                  this.whereIn("sender_id", user.id).andWhere("is_rejected", 1)
                })
                .with("requests")
                .fetch()

                if (!churchRequests) {
                  return response.status(400).json({
                    label: `View Church Requests`,
                    statusCode: 400,
                    message: `There was an error fetching Rejected requests.`,
                  });
                }
                response.status(200).json({
                  label: "View Church Requests",
                  message: "Rejected Requests fetched successfully.",
                  data: churchRequests,
                });
          
              } catch (ViewRequestsError) {
                console.log(ViewRequestsError);
                return response.status(200).json({
                  ViewRequestsError,
                  label: `View Rejected Church Requests`,
                  statusCode: 500,
                  message: `Internal Server Error`,
                });
              }
          }


                //   view Requests sent 
            async viewSingleChurchRequest({params:{request_id} , response , auth}){
              try {
              const {user} = auth.current;

              const verifyUser = await churchRequestUser.query()
              .where(function () {
                this.where("id", request_id).andWhere("sender_id", user.id);
              })
              .orWhere(function () {
                this.whereIn("id", request_id).andWhere("reciever_id",user.id)
              })
              .fetch();

              if (!verifyUser) {
                return response.status(400).json({
                  label: `View Single Church Request`,
                  statusCode: 400,
                  message: `Youre not authorized to view this request.`,
                });
              }

              
                const churchRequests = await churchRequestUser.query()
                .where("id", request_id)
                // .orWhere("sender_id", user_id)
                .with("requests")
                .fetch();

                if (!churchRequests) {
                  return response.status(400).json({
                    label: `View Single Church Request`,
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
