'use strict'

class PageController {
    showHome({view}) {
        return view.render('home')
    }

    showSignup({view}) {
        return view.render('signup')
    }

    showLogin({view}) {
        return view.render('login')
    }
    showAdmin({view}) {
        return view.render('admin')
    }
    showStudent({view}) {
        return view.render('student')
    }
}

module.exports = PageController
