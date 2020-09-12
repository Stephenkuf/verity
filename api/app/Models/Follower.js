'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Follower extends Model {

    followers(){
       return this.hasMany("App/Models/User", "follower_id", "id")
    }
    
 following(){
       return this.hasMany("App/Models/User", "user_id", "id")
    }
}

module.exports = Follower
