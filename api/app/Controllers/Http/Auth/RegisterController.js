"use strict";

const { validateAll } = use("Validator");
const User = use("App/Models/User");
const randomString = require("random-string");
const Mail = use("Mail");
const safeAwait = require("safe-await");

class RegisterController {
  async register({ response, request }) {
    //validate form inputs

    try {
      const {
        full_name,
        username,
        email,
        password,
        phone_number
      } = request.all();

      //create user

      const userLookup = await User.findBy("email", email);

      if (userLookup) {
        const val = userLookup.toJSON();
        if (val != null) {
          return response.status(400).json({
            label: `User Registration`,
            statusCode: 400,
            message: `That email has been used to register`
          });
        }
      }

      const user = await User.create({
        full_name,
        username,
        email,
        password,
        phone_number,
        confirmation_token: randomString({
          length: 40
        })
      });

      if (!user) {
        return response.status(400).json({
          error: userError,
          label: `User Registration`,
          statusCode: 400,
          message: `We were unable to register User `
        });
      }

      // //send confirmation Email
      // await Mail.send("auth.emails.confirm-email", user.toJSON(), message => {
      //   message
      //     .to(user.email)
      //     .from("Verity.com")
      //     .subject("Please confirm your email address");
      // });

      // // display success message
      response.status(200).json({
        label: "User Registration",
        message:
          "Registration Sucessful ,  A mail has been sent to you to confirm your account",
        data: user
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        error: error,
        label: `User Registration`,
        statusCode: 400,
        message: `We were unable to register User `
      });
    }
  }
  async confirmEmail({ params: { token }, response }) {
    //get user with the confirmation token
    const user = await User.findBy("confirmation_token ", token);

    //set confirmation to null and is_actie to true

    user.confirmation_token = null;
    user.is_active = true;
    //persist user to database

    user.save();
    //display success message

    response.status(200).json({
      status: success,
      label: `user Registration`,
      message: "Your Email has ben confirmed , LogIn"
    });
  }
}

module.exports = RegisterController;
