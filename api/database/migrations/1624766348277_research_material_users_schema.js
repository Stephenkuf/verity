'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResearchMaterialUsersSchema extends Schema {
  up () {
    this.create('research_material_users', (table) => {
      table.increments()
      table.integer("request_id")
      table.integer("sender_id")
      table.integer("reciever_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('research_material_users')
  }
}

module.exports = ResearchMaterialUsersSchema
