'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DenominationInfo extends Model {
    branches(){
        return this.hasMany("App/Models/BranchInfo", "id", "denomination_id")
    }
    members(){
        return this.hasMany("App/Models/AdditionalUserInfo","id", "denomination_id")
    }
}

module.exports = DenominationInfo
