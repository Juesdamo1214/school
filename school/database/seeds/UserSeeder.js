'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Hash = use('Hash')
const Database = use('Database')

class UserSeeder {
  static async run () {
    const password1 = '123456'
    const hashedPassword = await Hash.make(password1)
    await Database.table('users').insert([{
      rol_id: 2,
      first_name: 'admin',
      last_name: 'min',
      email: 'admin@example.com',
      password: hashedPassword
    }])
  }
}

module.exports = UserSeeder
