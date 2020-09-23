'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {
    members(){
        return this.belongsToMany('App/Models/User')
        .pivotTable('group_users')
    }
    posts(){
        return this.hasMany("App/models/GroupPost", 'id','group_id')
    }
}


module.exports = Group
