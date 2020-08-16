'use strict'
const Message = use("App/Models/Message");
const UserMessage = use("App/Models/UserMessage")

class MessageController {
    // create a single message by the auth user 
   async  createMessage({request , response , auth}){

        try {
            const {user} = auth.current;
            const {message_body, recipient_id} = request.all();

            const saveMessage = await Message.create({
              message_body: message_body
            })

            if (!saveMessage || saveMessage == null) {
              return response.status(400).json({
                label: `Message Created`,
                statusCode: 400,
                message: `Error creating message`,
              })
            }

            // add sender and recipient_id to the user message pivot mapping table 
            const mapMessage = await UserMessage.create({
              message_id:saveMessage.id,
              sender_id:user.id,
              recipient_id:recipient_id
            })

            if (!mapMessage || mapMessage == null) {
              return response.status(400).json({
                label: `Message Created`,
                statusCode: 400,
                message: `Error creating message`,
              })
            }

            response.status(201).json({
                label: "Message Creation",
                message: "Message Created Successfully",
                data: saveMessage
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

        const UserMessages = await UserMessage.query()
        .where("sender_id" , user.id)
        .andWhere("recipient_id" , user.id)
        .with("messages")
        .fetch()

        if (!UserMessages || UserMessages == null) {
          return response.status(400).json({
            label: `Message Created`,
            statusCode: 400,
            message: `Error creating message`,
          })
        }


        response.status(200).json({
            label: "Message Creation",
            message: "Messages fetched Successfully",
            data: UserMessages
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
    // async getSingleMessage({response , auth}){
    //     try {
    //         const {user} = auth.current;

    //         const getMessage = await UserMessage.query()
    //         .where("message_id" ,  message_id)
    //         .first()

    //         if (!getMessage || getMessage == null) {
    //           return response.status(400).json({
    //             label: `Message Created`,
    //             statusCode: 400,
    //             message: `Error creating message`,
    //           })
    //         }
    //         response.status(200).json({
    //             label: "Single Message Fetch",
    //             message: "Message fetched Successfully",
    //             data: getMessage
    //           });
            
    //     } catch (error) {
    //         console.log(error);
    //         return response.status(400).json({
    //           error,
    //           label: `Post Creation`,
    //           statusCode: 400,
    //           message: `Internal Server Error `,
    //         })
    //     }
    // }
};
module.exports = MessageController;
