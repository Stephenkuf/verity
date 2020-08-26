'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GroupUser extends Model {
    groups(){
        return this.hasOne("App/Models/Group", 'group_id', 'id')
    }
}

module.exports = GroupUser
