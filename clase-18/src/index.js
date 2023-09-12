import 'dotenv/config' //Permite utilizar variables de entorno
import express from 'express'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()
const PORT = 4000

//BDD
mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
        console.log("BDD conectada")
    })
    .catch((error) => console.log("Error en conexion con MongoDB ATLAS: ", error))

//Middlewares
app.use(express.json())
app.use(cookieParser(process.env.SIGNED_COOKIE)) //Firmo la cookie
app.use(session({ //Configuracion de la sesion de mi app
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

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