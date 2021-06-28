'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevotionalSchema extends Schema {
  up () {
    this.create('devotionals', (table) => {
      table.increments()
      table.integer("sender_id")
      table.string("devotional_title")
      table.string("devotional_body")
      table.string("devotional_photo")
      table.string("denomination_id")
      table.string("reason")
      table.integer("is_accepted").defaultTo(0)
      table.integer("is_rejected").defaultTo(0)
      table.integer("is_deleted").defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('devotionals')
  }
}

module.exports = DevotionalSchema
