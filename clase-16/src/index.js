import express from 'express'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'
import mongoose from 'mongoose'
import cartModel from './models/carts.models.js'
import { userModel } from './models/users.models.js'

const app = express()
const PORT = 4000

mongoose.connect('URL_MONGODB')
    .then(async () => {
        //await cartModel.create({})
        console.log("BDD conectada")
        const cart = await cartModel.findOne({ _id: "64f7be67ee3d47232d0cd8b5" })
        console.log(JSON.stringify(cart))
    })
    .catch((error) => console.log("Error en conexion con MongoDB ATLAS: ", error))



app.use(express.json())
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})