'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SettingsDenominationSchema extends Schema {
  up() {
    this.create('settings_denominations', (table) => {
      table.increments()
      table.string('denomination_label', 60).notNullable()
      table.integer('created_by').defaultTo(1)
      table.boolean('is_deleted').defaultTo(0)
      table.integer('deleted_by')
      table.timestamps()
    })
  }

  down() {
    this.drop('settings_denominations')
  }
}

module.exports = SettingsDenominationSchema
