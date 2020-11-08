'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestsSchema extends Schema {
  up () {
    this.create('requests', (table) => {
      table.increments()
      table.string("request_title")
      table.string("request_body")
      table.integer("is_accepted")
      table.integer("is_deleted")
      table.timestamps()
    })
  }

  down () {
    this.drop('requests')
  }
}

module.exports = RequestsSchema
