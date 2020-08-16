'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserMessage extends Model {
    messages(){
        return this.hasOne('App/Models/Message', "message_id","id")
    }
}

module.exports = UserMessage
