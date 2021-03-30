'use strict'

/*
|--------------------------------------------------------------------------
| SettingsDenominationSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

const denominations = [{
    denomination_label: 'Deeper Life Bible Church'
  },
  {
    denomination_label: 'The Redeemeed Christian church of God'
  },
  {
    denomination_label: "The Winners Chapel"
  },
  {
    denomination_label: "Mountain of Fire and Miracles Ministries"
  },
  {
    denomination_label: "Church of Christ"
  }
]


class SettingsDenominationSeeder {
  async run() {
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0;')
    await Database.truncate('settings_denominations')
    await Database.table('settings_denominations').insert(denominations)
    await Database.raw('SET FOREIGN_KEY_CHECKS = 1;')
  }
}

module.exports = SettingsDenominationSeeder
