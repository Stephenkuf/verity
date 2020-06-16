'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DenominationInfoSchema extends Schema {
  up() {
    this.create('denomination_infos', (table) => {
      table.increments()
      table.integer("user_id")
      table.string("denomination_name")
      table.string("address")
      table.string("description")
      table.string("denomination_phone")
      table.string("slug")
      table.boolean("is_active").defaultTo(0)
      table.string("denomination_email")
      table.string("city")
      table.string("country")
      table.string("designation")
      table.integer("no_of_members")
      table.timestamps()
    })
  }

  down() {
    this.drop('denomination_infos')
  }
}

module.exports = DenominationInfoSchema
