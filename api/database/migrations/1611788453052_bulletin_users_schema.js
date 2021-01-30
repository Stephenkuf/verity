'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BulletinUsersSchema extends Schema {
  up () {
    this.create('bulletin_users', (table) => {
      table.increments()
      table.integer("bulletin_id")
      table.integer("sender_id")
      table.integer("branch_id")
      table.integer("denomination_id")
      table.timestamps()
    })
  }
  down () {
    this.drop('bulletin_users')
  }
}

module.exports = BulletinUsersSchema
