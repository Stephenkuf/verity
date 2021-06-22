'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EmailUser extends Model {
    emails(){
        return this.hasOne("App/Models/Email", "id","email_id" )
    }
}

module.exports = EmailUser
