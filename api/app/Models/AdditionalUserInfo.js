'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AdditionalUserInfo extends Model {
  static get hidden() {
    return ['created_at', 'updated_at']
  }

  denominationInfo(){
    return this.hasOne("App/Models/SettingsDenomination",'denomination_id' , 'id')
  }

  branchInfo(){
    return this.hasOne("App/Models/BranchInfo", 'branch_id' , 'id')
  }
}

module.exports = AdditionalUserInfo
