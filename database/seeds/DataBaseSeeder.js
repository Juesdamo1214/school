'use strict'

/*
|--------------------------------------------------------------------------
| DataBaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const RoleSeeder = use('./RoleSeeder')
const UserSeeder = use('./UserSeeder')

class DataBaseSeeder {
  async run () {
    await RoleSeeder.run();
    await UserSeeder.run();
  }
}

module.exports = DataBaseSeeder