import express from 'express'
import routerProd from './routes/products.routes.js'
import { __dirname } from './path.js'
import path from 'path'
const PORT = 4000
const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //URL extensas

//Routes
app.use('/static', express.static(path.join(__dirname, '/public'))) //path.join() es una concatenacion de una manera mas optima que con el +
app.use('/api/product', routerProd)

console.log(path.join(__dirname, '/public'))

//Server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})