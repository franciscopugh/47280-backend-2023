import 'dotenv/config' //Permite utilizar variables de entorno
import express from 'express'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'
import userRouter from './routes/users.routes.js'
import sessionRouter from './routes/sessions.routes.js'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import mongoose from 'mongoose'
import initializePassport from './config/passport.js'


const app = express()


const PORT = 4000

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB conectada")
    })
    .catch((error) => {
        console.log(error)
    })

//Middlewares
app.use(express.json())
app.use(cookieParser(process.env.SIGNED_COOKIE)) //Firmo la cookie
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

function auth(req, res, next) {
    console.log(req.session.email)

    if (req.session.email == "admin@admin.com" && req.session.password == "1234") {
        return next() //Continua con la ejecucion normal de la ruta
    }

    return res.send("No tenes acceso a este contenido")
}


//Routes

app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/api/users', userRouter)
app.use('/api/sessions', sessionRouter)

//Cookies

app.get('/setCookie', (req, res) => {
    res.cookie('CookieCookie', 'Esto es el valor de una cookie', { maxAge: 60000, signed: true }).send('Cookie creada') //Cookie de un minuto firmada
})

app.get('/getCookie', (req, res) => {
    res.send(req.signedCookies) //Consultar solo las cookies firmadas
    //res.send(req.cookies) Consultar TODAS las cookies
})

//SESSIONS

app.get('/session', (req, res) => {
    if (req.session.counter) { //Si existe la variable counter en la asesion
        req.session.counter++
        res.send(`Has entrado ${req.session.counter} veces a mi pagina`)
    } else {
        req.session.counter = 1
        res.send("Hola, por primera vez")
    }
})

app.get('/login', (req, res) => {
    const { email, password } = req.body


    req.session.email = email
    req.session.password = password

    return res.send("Usuario logueado")

})

app.get('/admin', auth, (req, res) => {
    res.send("Sos admin")
})

app.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error)
            console.log(error)
        else
            res.redirect('/')
    })
})


//Server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})