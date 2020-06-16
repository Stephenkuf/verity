'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRolesSchema extends Schema {
  up() {
    this.create('user_roles', (table) => {
      table.increments()
      table.string("role_label")
      table.timestamps()
    })
  }

  down() {
    this.drop('user_roles')
  }
}

module.exports = UserRolesSchema
