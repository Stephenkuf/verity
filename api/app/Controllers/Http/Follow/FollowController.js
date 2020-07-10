"use strict";
const User = use("App/Models/User");
const safeAwait = require("safe-await");
const Follower = use("App/Models/Follower");

class FollowController {
  async whoToFollow({
    request,
    response,
    auth
  }) {
    const {
      user
    } = auth.current;

    // // get user ids that the user is following
    // const [userWalletError, userWallet] = await safeAwait(
    //   Wallet.query()
    //   .where("user_id", user.id)
    //   .pluck("id")
    // );
    // if (userWalletError) {

    //   return createOperationResponse({
    //     error: userWalletError,
    //     label: `User wallets`,
    //     statusCode: 400,
    //     message: `There was a problem fetching User wallet logs`,
    //   });
    // }

    // // get the IDs of users the currently authenticated user is already following
    // const usersAlreadyFollowing = await User.following().ids();
    // console.log(usersAlreadyFollowing);

    // // fetch users the currently authenticated user is not already following
    // const usersToFollow = await User.query()
    //   .whereNot("id", user.id)
    //   .whereNotIn("id", usersAlreadyFollowing)
    //   .pick(3);
  }
}

module.exports = FollowController;
