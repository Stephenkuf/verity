'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestsSchema extends Schema {
  up () {
    this.create('requests', (table) => {
      table.increments()
      table.string("request_title")
      table.string("request_body")
      table.string("reason")
      table.integer("is_accepted").defaultTo(0)
      table.integer("is_rejected").defaultTo(0)
      table.integer("is_deleted").defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('requests')
  }
}

module.exports = RequestsSchema
