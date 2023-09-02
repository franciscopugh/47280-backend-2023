import express from 'express'
import productRouter from './routes/products.routes.js'

const app = express()
const PORT = 4000

app.use(express.json())

app.use('/api/products', productRouter)

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})