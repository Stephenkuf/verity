'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SettingsState extends Model {
  static get visible() {
    return ["state_label", "id", "created_by"];
  }
}

module.exports = SettingsState
