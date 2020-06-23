'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SettingsDenomination extends Model {
  static get visible() {
    return ["denomination_label", "id", "created_by"];
  }
}

module.exports = SettingsDenomination
