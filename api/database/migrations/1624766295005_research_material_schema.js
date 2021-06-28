'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResearchMaterialSchema extends Schema {
  up () {
    this.create('research_materials', (table) => {
      table.increments()
      table.string("research_material_title")
      table.string("research_material_body")
      table.string("research_material_link")
      table.string("reason")
      table.integer("is_accepted").defaultTo(0)
      table.integer("is_rejected").defaultTo(0)
      table.integer("is_deleted").defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('research_materials')
  }
}

module.exports = ResearchMaterialSchema
