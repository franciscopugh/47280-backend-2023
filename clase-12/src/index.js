import express from 'express'
import userRouter from './routes/user.routes.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 4000

mongoose.connect('url_mongo_db')
    .then(() => console.log("DB conectada"))
    .catch((error) => console.log("Error en conexion a MongoDB Atlas: ", error))

app.use(express.json())

app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})