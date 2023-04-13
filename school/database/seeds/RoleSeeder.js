'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Database = use('Database')


class RoleSeeder {
  static async run () {
    await Database.table('roles').insert([{
      id: 1,
      name: 'User'
    },{
      id: 2,
      name: 'Admin'
    }])
  }
}

module.exports = RoleSeeder
