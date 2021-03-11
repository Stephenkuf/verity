'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventLocatorSchema extends Schema {
  up () {
    this.create('event_locators', (table) => {
      table.increments()
      table.integer("denomination_id")
      table.integer("branch_id")
      table.string("event_title")
      table.string("event_theme")
      table.string("event_body")
      table.string("event_start_date")
      table.string("event_end_date")
      table.timestamps()
    })
  }

  down () {
    this.drop('event_locators')
  }
}

module.exports = EventLocatorSchema
