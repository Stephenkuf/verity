'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {
    // members(){
    //     return this.hasMany("App/Models/GroupUser",'id', 'group_id')
    // }
}

module.exports = Group
