'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SettingsStateSchema extends Schema {
  up() {
    this.create('settings_states', (table) => {
      table.increments()
      table.string('state_label', 60).notNullable()
      table.integer('country_id').notNullable().defaultTo(1) //Defaults to Nigeria
      table.integer('created_by').defaultTo(1)
      table.boolean('is_deleted').defaultTo(0)
      table.integer('deleted_by')
      table.timestamps()
    })
  }

  down() {
    this.drop('settings_states')
  }
}

module.exports = SettingsStateSchema
