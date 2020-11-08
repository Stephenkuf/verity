'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResourcesSchema extends Schema {
  up () {
    this.create('resources', (table) => {
      table.increments()
      table.string("resource_title")
      table.string("resource_body")
      table.boolean("is_video")
      table.boolean("is_link")
      table.boolean("is_photo")
      table.timestamps()
    })
  }

  down () {
    this.drop('resources')
  }
}

module.exports = ResourcesSchema
