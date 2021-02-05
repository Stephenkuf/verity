'use strict'
const churchResource = use("App/Models/Resource");
const churchResourceUser = use("App/Models/ResourceUser");
const DenominationInformation = use("App/Models/DenominationInfo");
const additionalUserInfo = use("App/Models/AdditionalUserInfo");
const branchInfo = use("App/Models/BranchInfo");
const User  = use("App/Models/User");
const UserRole  = use("App/Models/UserRole");

class ChurchResourceController {

    async createChurchResource({ request, response, auth }) {
        try {
            const {resource_title, resource_type , resource_body, resource_file} = request.all();
            const {user} = auth.current;
         
            if(resource_type != "audio" && resource_type != "photo" && resource_type != "video" && resource_type != "link")
              return response.status(400).json({
                label: `Resource Creation `,
                statusCode: 400,
                message: `Invalid Resource type`,
              });
            
         let is_audio, is_photo , is_video , is_link;
          if(resource_type != "audio")
          is_audio == 1
          if(resource_type != "photo")
          is_photo == 1
          if(resource_type != "video")
          is_video == 1
          if(resource_type != "link")
          is_link == 1

          const churchResourceCreation = await churchResource.create({
            resource_title, 
            resource_body,
            is_video,
            is_link,
            is_audio,
            is_photo  
          })

          if (!churchResourceCreation) {
            return response.status(400).json({
              label: `Resource Creation `,
              statusCode: 400,
              message: `There was an error creating Resource.`,
            });
          }
          const findDenomination = await DenominationInformation.findBy("user_id", user.id)
          
          if (!findDenomination) {
            await churchResource
            .query()
            .where('id', churchResourceCreation.id)
            .delete()

            return response.status(400).json({
              label: `Resource Creation `,
              statusCode: 400,
              message: `Could not find denomination.`,
            });
          }

          const churchResourceLog = await churchResourceUser.findOrCreate({
              resource_id:churchResourceCreation.id,
              sender_id:user.id,
              denomination_id:findDenomination.id
          })

           if (!churchResourceLog) {
            return response.status(400).json({
              label: `Request Creation `,
              statusCode: 400,
              message: `There was an error creating Resource.`,
            });
          }

          response.status(200).json({
            label: "Resource Creation",
            message: "Resource created successfully. Await confirmation",
            data: churchResourceCreation,
          });
    
        } catch (error) {
          console.log(error);
          return response.status(200).json({
            error,
            label: `Request Creation`,
            statusCode: 500,
            message: `Internal Server Error`,
          });
        }
      }


      // view all resources in a denomination 
        //   view Requests sent 
    async viewDenominationResources({request , response , auth}){
      try {
        let findDenomination;
       const {user} = auth.current;
       const user_role = await UserRole.findBy("role_label", "User");
       const user_role_branch = await UserRole.findBy("role_label", "Customer");


       console.log("userrole ",user.user_role_id );
       if(user.user_role_id == user_role.id){
         findDenomination = await additionalUserInfo.query().where("user_id", user.id).first()
            
        if (!findDenomination) {
          return response.status(400).json({
            label: `Resource Creation `,
            statusCode: 400,
            message: `Could not find customer denomination.`,
          });
        }
       }else if(user.user_role_id == user_role.id){
        findDenomination = await branchInfo.query().where("user_id", user.id).first()
           
       if (!findDenomination) {
         return response.status(400).json({
           label: `Resource Creation `,
           statusCode: 400,
           message: `Could not find customer branch.`,
         });
       }
      }else{
           findDenomination = await DenominationInformation.query().where("user_id", user.id).first()
            
          if (!findDenomination) {
            return response.status(400).json({
              label: `Resource Creation `,
              statusCode: 400,
              message: `Could not find user denomination.`,
            });
          }
       }

       const getResourcesByDenomination = await churchResourceUser.query().where("denomination_id", findDenomination.id).pluck("resource_id")

        const churchResources = await churchResource.query()
        .whereIn("id", getResourcesByDenomination )
        .fetch()

         if (!churchResources) {
          return response.status(400).json({
            label: `View Church Resources`,
            statusCode: 400,
            message: `There was an error fetching resources.`,
          });
        }
        response.status(200).json({
          label: "View  church Resources",
          message: "Resources fetched successfully.",
          data: churchResources,
        });
  
      } catch (ViewResourcesError) {
        console.log(ViewResourcesError);
        return response.status(200).json({
          ViewResourcesError,
          label: `View Church Resources`,
          statusCode: 500,
          message: `Internal Server Error`,
        });
      }
     } 

       // view all resources in a denomination 
         //   view Requests sent 
    async viewSingleResource({request ,params:{id}, response , auth}){
      try {
       const {user} = auth.current;
      
        const churchResources = await churchResource.query()
        .where("id", id )
        .fetch()

         if (!churchResources) {
          return response.status(400).json({
            label: `View Church Resources`,
            statusCode: 400,
            message: `There was an error fetching resource.`,
          });
        }
        response.status(200).json({
          label: "View single church Resource",
          message: "Resource fetched successfully.",
          data: churchResources,
        });
  
      } catch (ViewResourcesError) {
        console.log(ViewRequestsError);
        return response.status(200).json({
          ViewResourcesError,
          label: `View single Church Resource`,
          statusCode: 500,
          message: `Internal Server Error`,
        });
      }
     } 
}

module.exports = ChurchResourceController
