'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')

class LoginController {
  async login({
    request,
    auth,
    response
  }) {
    try {
      const {
        email,
        password,
        remember
      } = request.all();

      //retrieve user info on the database 
      const user = await User.query()
        .where('email', email)
        // .where('is_active', true)
        .first()

      // verify user
      if (user) {
        const passwordVerified = await Hash.verify(password, user.password)
        //login user 
        if (passwordVerified) {
          const data = await auth.attempt(email, password);
          return response.status(200).json({
            result: [user, data],
            label: "User Login",
            message: 'Successful! , User as been logged in'
          })
        } else {
          response.status(401).json({
            status_code: 401,
            label: "Login Error",
            message: "Unable to LogIn"
          })
        }
      } else {
        response.status(401).json({
          status_code: 401,
          label: "Login Error",
          message: "Error , User not found"
        })
      }
    } catch (error) {
      console.log("LoginError>>>>>>", error),
        //get form data
        response.status(500).json({
          status_code: 500,
          label: "Login Error",
          message: "Internal Server Error "
        })
    }
  }
}

module.exports = LoginController
