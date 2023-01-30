'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/admin', 'PageController.showAdmin').middleware(['auth']).as('admin')
Route.get('/student', 'PageController.showStudent').middleware(['auth']).as('admin')

Route.get('/', 'PageController.showHome')

Route.group(() => {
    Route.get('/signup', 'PageController.showSignup')
    Route.get('/login', 'PageController.showLogin')
}).middleware(['authenticated'])





Route.group(() => {
    Route.post('signup', 'AuthController.signup')
    Route.post('login', 'AuthController.login')
    Route.post('logout', 'AuthController.logout')
    Route.post('subject', 'AuthController.subject')
}).prefix('api/')