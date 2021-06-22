'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegisterUsersSchema extends Schema {
  up () {
    this.create('register_users', (table) => {
      table.increments()
      table.integer("register_id")
      table.integer("sender_id")
      table.integer("reciever_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('register_users')
  }
}

module.exports = RegisterUsersSchema
