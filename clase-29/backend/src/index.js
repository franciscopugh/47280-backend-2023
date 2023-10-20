import 'dotenv/config' //Permite utilizar variables de entorno
import cors from 'cors'
import express from 'express'
import router from './routes/index.routes.js'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'
import initializePassport from './config/passport.js'

const whiteList = ['http://127.0.0.1:5173']

const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) != -1 || !origin) { //Existe dentro de whitelist
            callback(null, true)
        } else {
            callback(new Error("Acceso denegado"))
        }
    }
}

const app = express()
const PORT = 4000

app.use(cors(corsOptions))
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB conectada")
    })
    .catch((error) => {
        console.log(error)
    })

//Middlewares
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET)) //Firmo la cookie
app.use(session({ //Configuracion de la sesion de mi app
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 60 //Segundos, no en milisegundos
    }),
    //store: new fileStorage({ path: './sessions', ttl: 10000, retries: 1 }),
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/', router)

//Server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})