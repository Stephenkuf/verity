'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }
  reply() {
    return this.hasMany("App/Models/Reply");
  }
  like() {
    return this.hasMany("App/Models/Like")
  }
}

module.exports = Post
