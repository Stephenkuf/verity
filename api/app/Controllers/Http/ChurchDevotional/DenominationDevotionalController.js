'use strict'
const Devotional = use("App/Models/Devotional");
const DenominationInformation = use("App/Models/DenominationInfo");

class DenominationDevotionalController {

  async denominationViewDevotional({ response, auth }) {
    try {
        const {user} = auth.current;

           const findDenomination = await DenominationInformation.findBy(
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
          
            const churchDevotionals = await Devotional.query()
                .where("denomination_id" ,findDenomination.id) 
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
    
    } catch (ViewDevotionalsError) {
      console.log(ViewDevotionalsError);
      return response.status(200).json({
        ViewDevotionalsError,
        label: `View  Denomination Devotionals`,
        statusCode: 500,
        message: `Internal Server Error`,
      });
    }
  }

  async viewRejectedDevotionals({  response, auth }) {
    try {
      const { user } = auth.current;
      const findDenomination = await DenominationInformation.findBy(
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
  
    const churchDevotionals = await Devotional.query()
        .where("denomination_id" ,findDenomination.id) 
        .andWhere("is_rejected" ,1) 
        .orderBy("created_at" ,"desc")
        .fetch()

    if (!churchDevotionals) {
        return response.status(400).json({
            label: `View Denomination Devotionals`,
            statusCode: 400,
            message: `There was an error fetching Rejected Denomination Devotionals.`,
        });
    }
    response.status(200).json({
    label: "View Rejected Church Devotionals",
    message: "Rejected Devotionals fetched successfully.",
    data: churchDevotionals,
    });
    } catch (ViewRejectedDevotionalsError) {
      console.log(ViewRejectedDevotionalsError);
      return response.status(200).json({
        ViewRejectedDevotionalsError,
        label: `View Rejected Church Devotionals`,
        statusCode: 500,
        message: `Internal Server Error`,
      });
    }
  }

  async viewAcceptedDevotionals({ response, auth }) {
    try {
      const { user } = auth.current;
      const findDenomination = await DenominationInformation.findBy(
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
  
    const churchDevotionals = await Devotional.query()
        .where("denomination_id" ,findDenomination.id) 
        .andWhere("is_accepted" ,1) 
        .orderBy("created_at" ,"desc")
        .fetch()

    if (!churchDevotionals) {
        return response.status(400).json({
            label: `View Denomination Devotionals`,
            statusCode: 400,
            message: `There was an error fetching Accepted Denomination Devotionals.`,
        });
    }
    response.status(200).json({
        label: "View Accepted Church Devotionals",
        message: "Accepted Devotionals fetched successfully.",
        data: churchDevotionals,
    });
    } catch (ViewAcceptedDevotionalsError) {
      console.log(ViewAcceptedDevotionalsError);
      return response.status(200).json({
        ViewAcceptedDevotionalsError,
        label: `View Accepted Church Devotionals`,
        statusCode: 500,
        message: `Internal Server Error`,
      });
    }
  }

  async acceptDevotional({ request, response, auth }) {
    try {
      const { devotional_id } = request.all();
      const { user } = auth.current;

        const findDenomination = await DenominationInformation.findBy(
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
    
        const churchDevotionals = await Devotional.query()
            .where("id" ,devotional_id) 
            .where("denomination_id" ,findDenomination.id) 
            .orderBy("created_at" ,"desc")
            .first()

        if (!churchDevotionals) {
            return response.status(400).json({
                label: `Accept Denomination Devotionals`,
                statusCode: 400,
                message: `You are not authorized to accept this Devotional.`,
            });
        }

        const churchDevotionalAccept = await Devotional
            .query()
            .where("id", devotional_id)
            .update({ is_accepted: 1, is_rejected: 0 });

        if (!churchDevotionalAccept) {
            return response.status(400).json({
            label: `Accept Church Devotional`,
            statusCode: 400,
            message: `There was an error accepting Devotional.`,
            });
        }
        response.status(200).json({
            label: "Accept Devotional",
            message: "Devotional Accepted",
            data: churchDevotionalAccept,
        });
    } catch (AcceptDevotionalsError) {
      console.log(AcceptDevotionalsError);
      return response.status(200).json({
        AcceptDevotionalsError,
        label: `Accept Church Devotionals`,
        statusCode: 500,
        message: `Internal Server Error`,
      });
    }
  }

  async rejectDevotional({ request, response, auth }) {
    try {
      const { devotional_id, reason } = request.all();
      const { user } = auth.current;

        const findDenomination = await DenominationInformation.findBy(
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

        const churchDevotionals = await Devotional.query()
            .where("id" ,devotional_id) 
            .where("denomination_id" ,findDenomination.id) 
            .orderBy("created_at" ,"desc")
            .first()

        if (!churchDevotionals) {
            return response.status(400).json({
                label: `Reject Denomination Devotionals`,
                statusCode: 400,
                message: `You are not authorized to reject this Devotional.`,
            });
        }

        const churchDevotionalReject = await Devotional
            .query()
            .where("id", devotional_id)
            .update({ is_accepted: 0, is_rejected: 1, reason:reason });

        if (!churchDevotionalAccept) {
            return response.status(400).json({
            label: `Accept Church Devotional`,
            statusCode: 400,
            message: `There was an error rejecting Devotional.`,
            });
        }
        response.status(200).json({
            label: "Reject Devotional",
            message: "Devotional Rejected",
            data: churchDevotionalReject,
        });
    } catch (RejectDevotionalsError) {
      console.log(RejectDevotionalsError);
      return response.status(200).json({
        RejectDevotionalsError,
        label: `Reject Church Devotionals`,
        statusCode: 500,
        message: `Internal Server Error`,
      });
    }
  }

}

module.exports = DenominationDevotionalController
