'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestUsersSchema extends Schema {
  up () {
    this.create('request_users', (table) => {
      table.increments()
      table.integer("sender_id")
      table.integer("reciever_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('request_users')
  }
}

module.exports = RequestUsersSchema
