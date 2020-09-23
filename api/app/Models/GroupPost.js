'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GroupPost extends Model {
    posts(){
        return this.hasMany("App/Models/Post", 'post_id','id')
    }
}

module.exports = GroupPost
