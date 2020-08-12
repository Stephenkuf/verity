'use strict'
const Message = use("App/Models/Message");
const UserMessage = use("App/Models/UserMessage")

class MessageController {
    // create a single message by the auth user 
   async  createMessage({request , response , auth}){
      

        try {
            const {user} = auth.current;
            const {message_body, recipient_id} = request.all();



            response.status(200).json({
                label: "Message Creation",
                message: "Message Created Successfully",
                data: messageCreation
              });

        } catch (error) {
            console.log(error);
            return response.status(400).json({
              error,
              label: `Post Creation`,
              statusCode: 400,
              message: `Internal Server Error `,
            })
        }
    }
    // get all messages for the auth user 
   async getMessages({ response , auth}){
    try {
        const {user} = auth.current;

        response.status(200).json({
            label: "Message Creation",
            message: "Messages fetched Successfully",
            data: messageFetching
          });
            
    } catch (error) {
        console.log(error);
        return response.status(400).json({
          error,
          label: `Post Creation`,
          statusCode: 400,
          message: `Internal Server Error `,
        })
        }
    }

    // get a single message sent to a user 
    async getSingleMessage({response , auth}){
        try {
            const {user} = auth.current;

            


            response.status(200).json({
                label: "Single Message Fetch",
                message: "Message fetched Successfully",
                data: messageFetch
              });
            
        } catch (error) {
            console.log(error);
            return response.status(400).json({
              error,
              label: `Post Creation`,
              statusCode: 400,
              message: `Internal Server Error `,
            })
        }
    }
};

module.exports = MessageController;
