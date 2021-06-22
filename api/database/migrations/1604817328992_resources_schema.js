'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResourcesSchema extends Schema {
  up () {
    this.create('resources', (table) => {
      table.increments()
      table.string("resource_title")
      table.text("resource_body")
      table.text("resource_file")
      table.boolean("is_video")
      table.boolean("is_audio")
      table.boolean("is_photo")
      table.boolean("is_link")
      table.timestamps()
    })
  }

  down () {
    this.drop('resources')
  }
}

module.exports = ResourcesSchema
