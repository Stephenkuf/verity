'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChurchServicesSchema extends Schema {
  up () {
    this.create('church_services', (table) => {
      table.increments()
      table.integer("user_id")
      table.integer("denomination_id")
      table.string("service_name")
      table.string("week_day")
      table.timestamps()
    })
  }

  down () {
    this.drop('church_services')
  }
}

module.exports = ChurchServicesSchema
