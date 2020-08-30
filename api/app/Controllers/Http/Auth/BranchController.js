'use strict'
const BranchInfo = use("App/Models/BranchInfo");
const User = use("App/Models/User");


class BranchController {

  //REGISTRAITON OF A DENOMINATION BRANCH 
  async registerDenominationBranch({
    request,
    response,
    auth
  }) {
    try {

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


      const loggedInUser = await auth.current.user;
      // console.log(loggedInUser.id);


      const lookUp = await User.findBy("id", loggedInUser.id)


      if (lookUp == null || !lookUp) {
        return response.status(400).json({
          label: `User Lookup`,
          statusCode: 400,
          message: `We were unable to find that Userr`,
        })
      }

      lookUp.is_complete_registration = 1

      const saveConfirmation = await lookUp.save()
      if (!saveConfirmation) {
       return response.status(400).json({
          label: `User registration completion update`,
          statusCode: 400,
          message: `We were unable to update user status `,
        })
      }


      const currentUser = lookUp.toJSON()
      console.log(currentUser.id);

      const branch = await BranchInfo.create({
        user_id: currentUser.id,
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
        .where('id', loggedInUser.id)
        .update({
          is_complete_registration: 1
        })
      
      if (!registered) {
        return response.status(400).json({
          label: `is registered Error`,
          statusCode: 400,
          message: `User fully registered error`
        })
      }

      return response.status(200).json({
        error: branch,
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
