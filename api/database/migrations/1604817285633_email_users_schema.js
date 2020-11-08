'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmailUsersSchema extends Schema {
  up () {
    this.create('email_users', (table) => {
      table.increments()
      table.integer("sender_id")
      table.integer("reciever_id")
      table.integer("email_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('email_users')
  }
}

module.exports = EmailUsersSchema
