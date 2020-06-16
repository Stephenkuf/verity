'use strict'

/*
|--------------------------------------------------------------------------
| UserRoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use("Database");

const roles = [{
    role_label: "Admin",
  },
  {
    role_label: "Denomination",
  },
  {
    role_label: "Branch",
  },
  {
    role_label: "User",
  },
];

class UserRoleSeeder {
  async run() {
    await Database.truncate("user_roles");

    await Database.from("user_roles").insert(roles);

  }
}

module.exports = UserRoleSeeder
