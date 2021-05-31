'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.string("user_string")
    })
  }

  down () {
    this.table('users', (table) => {
      // reverse alternations
      table.drop("user_string")
    })
  }
}

module.exports = UserSchema
