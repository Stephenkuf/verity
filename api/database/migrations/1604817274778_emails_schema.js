'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmailsSchema extends Schema {
  up () {
    this.create('emails', (table) => {
      table.increments()
      table.integer("sender_id")
      table.string("email_title")
      table.string("email_body")
      table.text("recipient_email")
      table.boolean("is_read")
      table.boolean("is_deleted")
      table.timestamps()
    })
  }
  
  down () {
    this.drop('emails')
  }
}

module.exports = EmailsSchema
