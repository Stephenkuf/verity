'use strict'

class ChurchRegisterController {
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
}

module.exports = ChurchRegisterController
