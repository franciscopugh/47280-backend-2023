import express from 'express'
import productRouter from './routes/products.routes.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 4000

mongoose.connect('URL DE MONGODB ATLAS')
    .then(() => console.log("BDD conectada"))
    .catch((error) => console.log("Error en conexion con MongoDB ATLAS: ", error))

app.use(express.json())
app.use('/api/products', productRouter)

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})