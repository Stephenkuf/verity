'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SettingsCountry extends Model {
  static get visible() {
    return ["country_label", "id", "created_by"];
  }
}

module.exports = SettingsCountry
