'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BranchInfo extends Model {
    members(){
        return this.hasMany("App/Models/AdditionalUserInfo", "id","branch_id" )
    }
}

module.exports = BranchInfo
