'use strict'
const BranchInfo = use("App/Models/BranchInfo");
const safeAwait = require("safe-await");
const User = use("App/Models/User");


class BranchController {

  //REGISTRAITON OF A DENOMINATION BRANCH 
  async registerDenominationBranch({
    request,
    response,
    auth
  }) {
    const {
      branch_name,
      branch_email,
      branch_phone,
      branch_address,
      branch_city,
      branch_country,
      branch_designation
    } = request.all();


    const loggedInUser = await auth.current.user;
    // console.log(loggedInUser.id);


    const [lookUpError, lookUp] = await safeAwait(User.findBy("id", loggedInUser.id))

    if (lookUpError) {
      return response.status(400).json({
        error: lookUpError,
        label: `User Lookup`,
        statusCode: 400,
        message: `We were unable to find that User `,
      })
    }
    if (lookUp == null) {
      return response.status(400).json({
        error: lookUpError,
        label: `User Lookup`,
        statusCode: 400,
        message: `We were unable to find that Userr`,
      })
    }

    const currentUser = lookUp.toJSON()
    console.log(currentUser.id);

    const [branchError, branch] = await safeAwait(
      BranchInfo.create({
        user_id: currentUser.id,
        branch_name,
        branch_email,
        branch_phone,
        branch_address,
        branch_city,
        branch_country,
        branch_designation
      })
    );

    if (branchError) {
      console.log("branch Error >>>", branchError);
      return response.status(400).json({
        error: branchError,
        label: `Branch Registeration`,
        statusCode: 400,
        message: `There was an error Registering Branch`,
      })
    }

    const [registeredError, registered] = await safeAwait(
      User.query()
      .where('id', loggedInUser.id)
      .update({
        is_complete_registration: 1
      })
    )
    if (registeredError) {
      return response.status(400).json({
        error: registeredError,
        label: `is registered Error`,
        statusCode: 400,
        message: `User fully registered error`
      })
    }

    return response.status(200).json({
      error: branch,
      label: `Denomination Registration`,
      statusCode: 200,
      message: `Denomination Registered successfully`,
    })
  }
}

module.exports = BranchController
