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


//VIEWS
Route.get('/', 'PageController.showHome')

Route.group(() => {
    Route.get('/', 'PageController.viewHome')
    Route.get('/signup', 'PageController.viewSignup')
    Route.get('/login', 'PageController.viewLogin')
})

//AUTENTICATION
Route.group(() => {
    Route.post('signup', 'AuthController.signup')
    Route.post('login', 'AuthController.login')
}).prefix('api/')