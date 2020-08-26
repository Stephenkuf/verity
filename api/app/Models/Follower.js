'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Follower extends Model {

    users(){
       return this.hasOne("App/Models/User", "follower_id", "id")
    }
}

module.exports = Follower
