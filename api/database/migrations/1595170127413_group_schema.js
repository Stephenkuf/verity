'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupSchema extends Schema {
  up() {
    this.create('groups', (table) => {
      table.increments()
      table.string("group_name").notNullable()
      table.text("group_bio")
      table.string("profile_photo")
      table.timestamps()
    })
  }

  down() {
    this.drop('groups')
  }
}
module.exports = GroupSchema
