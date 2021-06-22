'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RequestUser extends Model {
    requests(){
        return this.hasOne("App/Models/Request", "request_id", "id")
    }
}

module.exports = RequestUser
