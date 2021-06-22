"use strict";
const Helpers = use("Helpers");
const additionalUserInfo = use("App/Models/AdditionalUserInfo");
const denominationInfo = use("App/Models/DenominationInfo");
const branchInfo = use("App/Models/BranchInfo");

module.exports = {
    async getUserDenominationInfo(user){
        const is_denomination = await denominationInfo.findBy("user_id", user.id);
        if (is_denomination) {
            return{
                type:"is_denomination",
                denomination_id : is_denomination.denomination_id
            }
        }
        if (!is_denomination || is_denomination == null) {
            const is_branch = await branchInfo.findBy("user_id", user.id);
            if (is_branch || is_branch != null) {
                    return{
                        type:"is_branch",
                        denomination_id : is_branch.denomination_id,
                        branch_id: is_branch.id
                    }
            }
            if (!is_branch) {
                const userDetails = await additionalUserInfo
                .query()
                .where("user_id", user.id)
                .first();

                return{
                    type:"is_individual",
                    denomination_id : userDetails.denomination_id,
                    branch_id: userDetails.id
                }
            }
        }
    }
}