'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const UserDetails = use("App/Models/User");
const safeAwait = require("safe-await");



class User {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({
    response,
    auth
  }, next) {

    // call next to advance the request

    const [currentUserError, currentUser] = await safeAwait(auth.getUser())

    const authenticatedUser = await auth.getUser();
    const userRole = await UserDetails.query()
      .where("id", authenticatedUser.id)
      .first();

    if (
      currentUser
    ) {
      // call next to advance the request
      await next();
    } else {
      response.status(401).json({
        status: "Unauthorized",
        message: "Unauthorized Access",
        status_code: 401
      });
    }
  }
}

module.exports = User
