'use strict'

class PageController {
    viewHome({view}) {
        return view.render('home')
    }

    viewSignup({view}) {
        return view.render('signup')
    }

    viewLogin({view}) {
        return view.render('login')
    }

}

module.exports = PageController
