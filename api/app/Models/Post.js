"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Post extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }
  comment() {
    return this.hasMany("App/Models/Comment");
  }
  like() {
    return this.hasMany("App/Models/Like");
  }
  reply() {
    return this.hasMany("App/Models/Reply")
  }
}

module.exports = Post;
