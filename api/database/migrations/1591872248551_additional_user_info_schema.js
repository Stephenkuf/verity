'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdditionalUserInfoSchema extends Schema {
  up() {
    this.create('additional_user_infos', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('denomination_id')
      table.integer('branch_id')
      table.string('location').nullable()
      table.string('website_url').nullable()
      table.string('bio').nullable()
      table.string('profile_pic')
      table.timestamps()
    })
  }

  down() {
    this.drop('additional_user_infos')
  }
}

module.exports = AdditionalUserInfoSchema
