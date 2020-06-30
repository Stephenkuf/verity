'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserCommentSchema extends Schema {
  up() {
    this.create('user_comments', (table) => {
      table.increments()
      table.integer("user_id").notNullable()
      table.integer("comment_id").notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('user_comments')
  }
}

module.exports = UserCommentSchema
