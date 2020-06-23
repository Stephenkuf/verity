'use strict'

/*
|--------------------------------------------------------------------------
| SettingsStateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
const states = [{
    state_label: "Abia"
  },
  {
    state_label: "Adamawa"
  },
  {
    state_label: "Akwa Ibom"
  },
  {
    state_label: "Anambra"
  },
  {
    state_label: "Bauchi"
  },
  {
    state_label: "Bayelsa"
  },
  {
    state_label: "Benue"
  },
  {
    state_label: "Borno"
  },
  {
    state_label: "Cross River"
  },
  {
    state_label: "Delta"
  },
  {
    state_label: "Ebonyi"
  },
  {
    state_label: "Edo"
  },
  {
    state_label: "Ekiti"
  },
  {
    state_label: "Enugu"
  },
  {
    state_label: "Federal Capital Territory"
  },
  {
    state_label: "Gombe"
  },
  {
    state_label: "Imo"
  },
  {
    state_label: "Jigawa"
  },
  {
    state_label: "Kaduna"
  },
  {
    state_label: "Kano"
  },
  {
    state_label: "Katsina"
  },
  {
    state_label: "Kebbi"
  },
  {
    state_label: "Kogi"
  },
  {
    state_label: "Kwara"
  },
  {
    state_label: "Lagos"
  },
  {
    state_label: "Nasarawa"
  },
  {
    state_label: "Niger"
  },
  {
    state_label: "Ogun"
  },
  {
    state_label: "Ondo"
  },
  {
    state_label: "Osun"
  },
  {
    state_label: "Oyo"
  },
  {
    state_label: "Plateau"
  },
  {
    state_label: "Rivers"
  },
  {
    state_label: "Sokoto"
  },
  {
    state_label: "Taraba"
  },
  {
    state_label: "Yobe"
  },
  {
    state_label: "Zamfara"
  },
]

class SettingsStateSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('settings_states')
    await Database.table('settings_states').insert(states)
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')
  }
}

module.exports = SettingsStateSeeder
