'use strict'
const additionalUserInfo  = use("App/Models/AdditionalUserInfo");
const denominationInfo = use("App/Models/DenominationInfo");
const branchInfo = use("App/Models/BranchInfo");
const churchBulletin = use("App/Models/ChurchBulletin");
const churchBulletinLog = use("App/Models/BulletinUser");
const settingsRoles = use("App/Models/UserRole");
const Database  = use("Database");



class ChurchBulletinController {
    async createChurchBulletin({ request, response, auth }) {

    try {
      let userDenomination;
      const {bulletin_type, bulletin_subject, bulletin_body ,branch_id} = request.all();
        const {user} = auth.current;

      if(!bulletin_type && !branch_id){
        return response.status(400).json({
            label: `Recipient Information`,
            statusCode: 400,
              message: `Please enter a recipient destination`,
        });
      }
    
      if(bulletin_type == "denomination"){
          userDenomination = await denominationInfo.query().where("user_id", user.id).first()
          console.log("user denomination",userDenomination );
            if (!userDenomination) {
              return response.status(400).json({
                label: `branch Information`,
                statusCode: 400,
                message: `Could not find user denomination.`,
              });
            }
      } else {
        const branchInformation = await branchInfo.findBy("id",branch_id )

        if (!branchInformation) {
          return response.status(400).json({
            label: `Branch Information`,
            statusCode: 400,
            message: `There was an error fetching Branch Information`,
          });
        }
      }
          const churchBulletinCreation = await churchBulletin.create({
            bulletin_subject, 
            bulletin_body
          })

          if (!churchBulletinCreation) {
            return response.status(400).json({
              label: `Bulletin Creation `,
              statusCode: 400,
              message: `There was an error creating Bulletin.`,
            });
          }

         const LogchurchBulletin= await churchBulletinLog.findOrCreate({
              bulletin_id:churchBulletinCreation.id,
              sender_id:user.id,
              branch_id:branch_id,
          })

           if (!LogchurchBulletin) {
            return response.status(400).json({
              label: `Bulletin Creation `,
              statusCode: 400,
              message: `There was an error creating Bulletin.`,
            });
          }

          response.status(200).json({
            label: "Bulletin Creation",
            message: "Bulletin created successfully.",
            data: churchBulletinCreation,
          });
    
        } catch (error) {
          console.log(error);
          return response.status(200).json({
            error,
            label: `Bulletin Creation`,
            statusCode: 500,
            message: `Internal Server Error`,
          });
        }
    }
    //  view Requests sent 
    async viewChurchBulletin({request , response , auth}){
        try {
          let is_branch, churchBulletin;
         const {user} = auth.current;
        //  get userchurch and denomination first 
        // check if its a denomination 
        const is_denomination = await denominationInfo.findBy("user_id", user.id);
        
        churchBulletin = await Database
        .table('bulletin_users')
        .leftJoin('church_bulletins', 'bulletin_id', 'church_bulletins.id')
        .where("sender_id", user.id).andWhere('is_deleted', 0)
      

         if (!is_denomination){
          is_branch = await branchInfo.findBy("user_id", user.id);

          churchBulletin = await Database
          .table('bulletin_users')
          .leftJoin('church_bulletin', 'bulletin_id', 'church_bulletin.id')
          .where(function () {
            this.where("branch_id", is_branch.id).orWhere("denomination_id", is_branch.denomination_id)
          }) 
          .andWhere(function () {
            this.where('is_deleted', 0)
          })
           if (!is_branch){
             userDetails = await additionalUserInfo.query().where("user_id", user.id).first()

             await Database
              .table('bulletin_users')
              .leftJoin('church_bulletin', 'bulletin_id', 'church_bulletin.id')
              .where(function () {
                this.where("branch_id", userDetails.branch_id).orWhere("denomination_id", userDetails.branch_id)
              }) 
              .andWhere(function () {
                this.where('is_deleted', 0)
              })
            
           }
         }
           
         
          response.status(200).json({
            label: "View Church Bulletins",
            message: "Bulletins fetched successfully.",
            data: churchBulletin,
          });
    
        } catch (ViewAllBulletinError) {
          console.log(ViewAllBulletinError);
          return response.status(200).json({
            ViewAllBulletinError,
            label: `View Church Bulletins`,
            statusCode: 500,
            message: `Internal Server Error`,
          });
        }
    } 
    async viewSingleChurchBulletin({params:{bulletin_id} , response , auth}){
      try {
        // const {user} = auth.current;

        const churchBulletins = await churchBulletinLog.query()
          .where("id", bulletin_id)
          .with("bulletin")
          .fetch();

        if (!churchBulletins) {
            return response.status(400).json({
              label: `View Single Church Bulletin`,
              statusCode: 400,
              message: `There was an error fetching church Bulletin.`,
            });
        }
        response.status(200).json({
          label: "View Church Bulletins",
          message: "Bulletins fetched successfully.",
          data: churchRequests,
        });

      } catch (ViewBulletinError) {
        console.log(ViewBulletinError);
        return response.status(200).json({
          ViewBulletinError,
          label: `View Church Bulletins`,
          statusCode: 500,
          message: `Internal Server Error`,
        });
      }
    }
       
}

module.exports = ChurchBulletinController
