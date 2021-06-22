'use strict'
const User = use("App/Models/User");
const Mail = use("Mail");
const Email = use("App/Models/Email");
const EmailUser = use("App/Models/EmailUser");


class ChurchEmailController {
      // view all posts in the system

  async sendDenominationMail({ request, response, auth }) {
    try {
    const { email_title, email_body , recipient_email} = request.all()
      const {user}  = auth.current; 

    
     const mailSend =  await Mail.send("auth.emails.confirm-email", {email_title , email_body}, message => {
        message
          .to(recipient_email)
          .from("Verity")
          .subject("(Verity) New Denomination Email.");
      });

      // // display success message
      const sendMail = await Email.findOrCreate({
        sender_id:user.id,
        email_title,
        email_body,
        recipient_email 
     })

      if (!sendMail) {
        return response.status(400).json({
          label: `Mail Sending`,
          statusCode: 400,
          message: `There was an error sending Mail `,
        });
      }

      response.status(200).json({
        label: "Send Mail",
        message: "Mail sent  successfully",
        data: sendMail,
      });

    } catch (mailSendingError) {
      console.log(mailSendingError);
      return response.status(200).json({
        mailSendingError,
        label: `Send Mail`,
        statusCode: 200,
        message: `Internal Server Error`,
      });
    }
  }
  // sent emails 
  async viewDenominationMail({ request, response, auth }){
    try {
      const {user}  = auth.current; 
      const mailFetch = await Email.query()
        .where("sender_id", user.id)
        // .orWhere("reciever_id", user.id)
        // .with("emails")
        .fetch();

      if (!mailFetch) {
        return response.status(400).json({
          label: `View Mails`,
          statusCode: 400,
          message: `There was an error fetching all emails `,
        });
      }
      response.status(200).json({
        label: " View Mails",
        message: "Mails fetched successfully",
        data: ViewMail,
      });

    
    } catch (viewMailsError) {
      console.log(viewMailsError);
      return response.status(200).json({
        viewMailsError,
        label: `View Mails`,
        statusCode: 200,
        message: `Internal Server Error`,
      });
    } 
  }
}

module.exports = ChurchEmailController
