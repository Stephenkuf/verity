'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResourceUsersSchema extends Schema {
  up () {
    this.create('resource_users', (table) => {
      table.increments()
      table.integer("resource_id")
      table.integer("sender_id")
      table.integer("denomination_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('resource_users')
  }
}

module.exports = ResourceUsersSchema
