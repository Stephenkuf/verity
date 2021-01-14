'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RegisterUser extends Model {
    register(){
        return this.hasOne("App/Models/ChurchRegister", "register_id", "id")
    }
}

module.exports = RegisterUser
