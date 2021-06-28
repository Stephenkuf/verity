'use strict'
const Devotional = use("App/Models/Devotional");
const additionalUserInformation = use("App/Models/AdditionalUserInfo");

class UserDevotionalController {

    async createDevotional({ request, response, auth }) {
        try {
            const {devotional_title , devotional_body, devotional_photo} = request.all();
            const {user} = auth.current;

            const findDenomination = await additionalUserInformation.findBy(
                "user_id",
                 user.id
            )
             
            if (!findDenomination) {
                return response.status(400).json({
                    label: `Find Denomination`,
                    statusCode: 400,
                    message: `Could not find Denomination.`,
                });
            }

            const churchDevotionalCreation = await Devotional.create({
                sender_id:user.id, 
                devotional_title, 
                devotional_body, 
                denomination_id:findDenomination.denomination_id
            })

            if (!churchDevotionalCreation) {
                return response.status(400).json({
                label: `Devotional Creation `,
                statusCode: 400,
                message: `There was an error creating Devotional.`,
                });
            }

            response.status(200).json({
                label: "Devotional Creation",
                message: "Devotional created successfully. Await confirmation",
                data: churchDevotionalCreation,
            });
    
        } catch (DevotionalCreationError) {
          console.log({DevotionalCreationError});
          return response.status(200).json({
            DevotionalCreationError,
            label: `Devotional Creation`,
            statusCode: 500,
            message: `Internal Server Error`,
          });
        }
    }
    
    async viewAllDevotionals({ response }){
     try {
        const allDevotionals = await Devotional.query()
            .where("is_accepted" , 1 )
            .orderBy("created_at" ,"desc")
            .fetch()

            if (!allDevotionals) {
                return response.status(400).json({
                    label: `View All Devotionals`,
                    statusCode: 400,
                    message: `There was an error fetching All Devotionals.`,
                });
            }
            response.status(200).json({
                label: "View All Devotionals",
                message: "All Devotionals fetched successfully.",
                data: allDevotionals,
            });

        } catch (ViewAllDevotionalsError) {
            console.log(ViewAllDevotionalsError);
            return response.status(200).json({
            ViewAllDevotionalsError,
            label: `View All Devotionals`,
            statusCode: 500,
            message: `Internal Server Error`,
            });
        }
    } 

    async viewChurchDevotionals({params:{denomination_id}, response , auth}){
        try {
        let denominationId
           const findDenomination = await additionalUserInformation.findBy(
                "user_id",
                 user.id
            ) 
            if (!findDenomination) {
                return response.status(400).json({
                    label: `Find Denomination`,
                    statusCode: 400,
                    message: `Could not find Denomination.`,
                });
            }
            denominationId = findDenomination.denomination_id

            if(denomination_id){
                denominationId = denomination_id
            }
            const {user} = auth.current;
          
            const churchDevotionals = await Devotional.query()
                .where("denomination_id" ,denominationId) 
                .andWhere("is_accepted" , 1 )
                .orderBy("created_at" ,"desc")
                .fetch()

            if (!churchDevotionals) {
                return response.status(400).json({
                    label: `View Denomination Devotionals`,
                    statusCode: 400,
                    message: `There was an error fetching Denomination Devotionals.`,
                });
            }
            response.status(200).json({
                label: "View  Denomination Devotionals",
                message: "Denomination Devotionals fetched successfully.",
                data: churchDevotionals,
            });
    
        } catch (ViewDenominationDevotionalsError) {
            console.log(ViewDenominationDevotionalsError);
            return response.status(200).json({
                ViewDenominationDevotionalsError,
                label: `View Denomination Devotionals`,
                statusCode: 500,
                message: `Internal Server Error`,
            });
        }
    } 
    
    async viewSingleDevotional({params:{devotional_id}, response , auth}){
    try {
        const {user} = auth.current;

        const singleDevotional = await Devotional.query()
        .where("id", devotional_id)
        .first()

        if (!singleDevotional) {
            return response.status(400).json({
                label: `View Church Devotionals`,
                statusCode: 400,
                message: `There was an error fetching Devotional.`,
            });
        }

        if(!singleDevotional.is_accepted == 0 && !singleDevotional.sender_id == user.id){
            response.status(200).json({
                label: "View single church Devotional",
                message: "Devotional not Found.",
            });
        }
        
        response.status(200).json({
            label: "View single church Devotional",
            message: "Devotional fetch successful",
            data: singleDevotional,
        });

    } catch (ViewSingleDevotionalError) {
        console.log(ViewSingleDevotionalError);
        return response.status(200).json({
        ViewSingleDevotionalError,
        label: `View single Church Devotional`,
        statusCode: 500,
        message: `Internal Server Error`,
        });
    }
    } 

    async viewMyDevotionals({request , response , auth}){
        try {
            const {user} = auth.current;

            const userDevotionals = await Devotional.query()
               .where("sender_id" , user.id)
               .orderBy("created_at" ,"desc")
               .fetch()
       
               if (!userDevotionals) {
                   return response.status(400).json({
                       label: `View User Devotionals`,
                       statusCode: 400,
                       message: `There was an error fetching User Devotionals.`,
                   });
               }
               response.status(200).json({
                   label: "View User Devotionals",
                   message: "User Devotionals fetched successfully.",
                   data: userDevotionals,
               });
       
           } catch (ViewUserDevotionalsError) {
               console.log(ViewUserDevotionalsError);
               return response.status(200).json({
                ViewUserDevotionalsError,
               label: `View User Devotionals`,
               statusCode: 500,
               message: `Internal Server Error`,
               });
           }
    } 
}

module.exports = UserDevotionalController
