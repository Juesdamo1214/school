'use strict'
const {validate} = use('Validator');
const {flashAndRedirect} = use('App/Helpers');
const User = use('App/Models/User');
const Subject = use('App/Models/Subject');
const Hash = use('Hash');

class AuthController {
    async subject({session, request, response}){
        const validation = await validate(request.all(), {
            subject: 'required',
            teacher: 'required'
        });

        const subjectFound = await Subject.findBy('subject', request.input('subject'));
        if (subjectFound) {
            return flashAndRedirect(
            'danger',
            'this subject already exists',
            'back',
            {
                session,
                response,
            }
            );
        }

        await Subject.create({
            subject: request.input('subject'),
            teacher: request.input('teacher')
        });

        return flashAndRedirect(
            'success',
            'the subject was created',
            '/admin',
            {
                session,
                response
            }

        )
    }

    async logout({auth, response}) {
        await auth.logout();

        return response.redirect('/')
    }

    async login({session,request, response, auth}){
        const validation = await validate(request.all(),{
            email: 'required',
            password: 'required'
        });
        if (validation.fails()){
            session.withErrors(validation.messages()).flashExcept(['password']);
            return response.redirect('back')
        }

        const user = await User.findBy('email', request.input('email'));
        if(!user){
            return flashAndRedirect(
                'danger',
                'no user account found wirh this email',
                'back',
                {
                    session,
                    response,
                }
            );
        }

        const isSare = await Hash.verify(request.input('password'), user.password);
        if(!isSare){
            return flashAndRedirect(
                'danger',
                'incorret credentials',
                'back',
                {
                    session,
                    response,
                }
            );
        }

        if(user.rol_id ===1){
            await auth.login(user);
            return response.redirect('/student');
        }
        
        if(user.rol_id ===2){
            await auth.login(user);
            return response.redirect('/admin');
        }
    }




    async signup({session, request, response}){
        const validation = await validate(request.all(), {
            firstName: 'required',
            lastName: 'required',
            email: 'required|email',
            password: 'required|min:4',
        });

        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password']);
            return response.redirect('back');
        }

        const userFound = await User.findBy('email', request.input('email'));
        if (userFound) {
            return flashAndRedirect(
            'danger',
            'an account already exists with this email',
            'back',
            {
                session,
                response,
            }
            );
        }

        await User.create({
            first_name: request.input('firstName'),
            last_name: request.input('lastName'),
            password: request.input('password'),
            email: request.input('email'),
        });

        return flashAndRedirect(
            'success',
            'Your account was created',
            '/login',
            {
                session,
                response
            }

        )
    }
}

module.exports = AuthController
