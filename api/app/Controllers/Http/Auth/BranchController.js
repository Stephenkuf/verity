'use strict'
const BranchInfo = use("App/Models/BranchInfo");
const User = use("App/Models/User");
const UserRole = use("App/Models/UserRole");


class BranchController {

  //REGISTRAITON OF A DENOMINATION BRANCH 
  async registerDenominationBranch({
    request,
    response,
    auth
  }) {
    const {user} = await auth.current;

    try {
      const denominationString = await UserRole.findBy("role_label", "Branch")

      const {
        denomination_id,
        branch_name,
        branch_email,
        branch_phone,
        branch_address,
        branch_city,
        branch_country,
        branch_designation
      } = request.all();

      const branch = await BranchInfo.create({
        user_id: user.id,
        denomination_id,
        branch_name,
        branch_email,
        branch_phone,
        branch_address,
        branch_city,
        branch_country,
        branch_designation
      })


      if (!branch) {
        return response.status(400).json({
          label: `Branch Registeration`,
          statusCode: 400,
          message: `There was an error Registering Branch`,
        })
      }

      const registered = await 
        User.query()
        .where('id', user.id)
        .update({
          is_complete_registration: 1,
          user_role_id:denominationString.id
        })
      
      if (!registered) {
        return response.status(400).json({
          label: `is registered Error`,
          statusCode: 400,
          message: `User fully registered error`
        })
      }

      return response.status(200).json({
        result: branch,
        label: `Branch Registration`,
        statusCode: 200,
        message: `Branch Registered successfully`,
      })

    } catch (error) {
      console.log(error);

      return response.status(200).json({
        error,
        label: `Denomination Registration`,
        statusCode: 200,
        message: `There was an error registering denomination`,
      })
    }

  }
}

module.exports = BranchController
