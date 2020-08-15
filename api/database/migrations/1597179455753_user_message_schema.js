'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserMessageSchema extends Schema {
  up () {
    this.create('user_messages', (table) => {
      table.increments()
      table.integer("message_id")
      table.integer("sender_id")
      table.integer("recipient_id")
      table.boolean("is_read").defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('user_messages')
  }
}

module.exports = UserMessageSchema
