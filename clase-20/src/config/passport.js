import local from 'passport-local' //Estrategia
import passport from 'passport' //Manejador de las estrategias
import { createHash, validatePassword } from '../utils/bcrypt.js'

//Defino la estrategia a utilizar
const LocalStrategy = local.Strategy

const initializePassport = () => {
    //done es como si fuera un res.status(), el callback de respuesta
    passport.use('register', new LocalStrategy(
        { passReqToCallback: true, usernameField: 'email' }, async (req, username, passport, done) => {
            //Defino como voy a registrar un user

        }
    ))

}