'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChurchRegisterSchema extends Schema {
  up () {
    this.create('church_registers', (table) => {
      table.increments()
      table.integer("service_id")
      table.integer("total_members")
      table.integer("total_females")
      table.integer("total_males")
      table.timestamps()
    })
  }

  down () {
    this.drop('church_registers')
  }
}

module.exports = ChurchRegisterSchema
