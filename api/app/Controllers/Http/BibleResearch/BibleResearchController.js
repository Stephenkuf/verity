'use strict'
const ResearchMaterial = use("App/Models/ResearchMaterial");
const ResearchMaterialUser = use("App/Models/ResearchMaterialUser");

class BibleResearchController {

    async createResearchMaterial({request ,response, auth}){
        try {
            const {user} = auth.current;
             

             const researchMaterial = await churchResource.query()
             .where("id", id )
             .fetch()
     
              if (!researchMaterial) {
               return response.status(400).json({
                 label: `Create Research Material `,
                 statusCode: 400,
                 message: `There was an creating Research Material.`,
               });
             }

             response.status(200).json({
               label: " Research Material Creation",
               message: " Research Material created successfully.",
               data: researchMaterial,
             });
       
           } catch (createResearchMaterialError) {
             console.log(createResearchMaterialError);
             return response.status(200).json({
               createResearchMaterialError,
               label: `create Research Material`,
               statusCode: 500,
               message: `Internal Server Error`,
             });
           }
    }
}

module.exports = BibleResearchController
