'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupUserSchema extends Schema {
  up() {
    this.create('group_users', (table) => {
      table.increments()
      table.integer("user_id").notNullable()
      table.integer("group_id").notNullable()
      table.boolean("is_admin")
      table.timestamps()
    })
  }

  down() {
    this.drop('group_users')
  }
}

module.exports = GroupUserSchema
