'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BranchInfoSchema extends Schema {
  up() {
    this.create('branch_infos', (table) => {
      table.increments()
      table.integer("user_id")
      table.string("branch_name")
      table.string("branch_email")
      table.string("branch_phone")
      table.string("branch_address")
      table.string("branch_city")
      table.string("branch_country")
      table.string("branch_designation")
      table.timestamps()
    })
  }

  down() {
    this.drop('branch_infos')
  }
}

module.exports = BranchInfoSchema
