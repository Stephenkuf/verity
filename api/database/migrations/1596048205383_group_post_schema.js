'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupPostSchema extends Schema {
  up () {
    this.create('group_posts', (table) => {
      table.increments()
      table.integer("group_id")
      table.integer("post_id")
      table.timestamps()
    })
  }

  down () {
    this.drop('group_posts')
  }
}

module.exports = GroupPostSchema
