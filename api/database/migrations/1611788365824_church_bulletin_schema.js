'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChurchBulletinSchema extends Schema {
  up () {
    this.create('church_bulletins', (table) => {
      table.increments()
      table.string("bulletin_subject")
      table.string("bulletin_body")
      table.boolean("is_deleted").defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('church_bulletins')
  }
}

module.exports = ChurchBulletinSchema
