'use strict'

const {
  validateAll
} = use('Validator')
const User = use('App/Models/User')
const randomString = require('random-string')
const Mail = use('Mail')

class RegisterController {
  async register({
    response,
    request
  }) {
    //validate form inputs 
    const {
      full_name,
      username,
      email,
      password,
      phone_number
    } = request.all()

    //create user 

    const user = await User.create({
      full_name,
      username,
      email,
      password,
      phone_number,
      confirmation_token: randomString({
        length: 40
      })
    })


    //send confirmation Email 
    await Mail.send('auth.emails.confirm-email', user.toJSON(), message => {
      message.to(user.email)
        .from('Verity.com')
        .subject('Please confirm your email address')
    })
    // display success message 

    response.status(200).json({
      label: "User Registration",
      message: 'Registration Sucessful ,  A mail has been sent to you to confirm your account',
      data: user
    })
  }
  async confirmEmail({
    params: {
      token
    },
    response
  }) {
    //get user with the confirmation token
    const user = await User.findBy('confirmation_token ', (token))

    //set confirmation to null and is_actie to true 


    user.confirmation_token = null
    user.is_active = true
    //persist user to database 

    user.save()
    //display success message

    response.status(200).json({
      message: 'Your Email has ben confirmed , LogIn'
    })

  }
}

module.exports = RegisterController
