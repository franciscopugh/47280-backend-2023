import express from 'express'
import productRouter from './routes/products.routes.js'
import cartRouter from './routes/cart.routes.js'
import mongoose from 'mongoose'
import { orderModel } from './models/order.models.js'
import { userModel } from './models/users.models.js'

const app = express()
const PORT = 4000

mongoose.connect('URL MONGO')
    .then(async () => {
        console.log("BDD conectada")
        const resultados = await orderModel.paginate({ status: 'medium' }, { limit: 1, page: 3, sort: 'desc' })
        console.log(resultados)
        /*await orderModel.create([
        { name: 'Napolitana', size: 'small', price: '2000', quantity: '5' },
        { name: '4 quesos', size: 'medium', price: '3000', quantity: '3' },
        { name: 'Pepperoni', size: 'large', price: '4000', quantity: '2' },
        { name: 'Jamon crudo y rucula', size: 'medium', price: '2300', quantity: '4' },
        { name: 'Fugazza', size: 'small', price: '2600', quantity: '6' },
        { name: 'Napolitana', size: 'large', price: '3500', quantity: '3' },
        { name: 'Especial', size: 'small', price: '1500', quantity: '1' },
        { name: '4 quesos', size: 'large', price: '5000', quantity: '4' },
        { name: 'Pepperoni', size: 'medium', price: '4000', quantity: '5' },
        { name: 'Mozzarella', size: 'small', price: '1600', quantity: '1' },
        { name: 'Jamon crudo y rucula', size: 'medium', price: '3500', quantity: '2' }])
        const resultados = await orderModel.aggregate([
            {
                $match: { size: 'medium' }
            },
            {
                $group: { _id: "$name", totalQuantity: { $sum: "$quantity" }, totalPrice: { $sum: "$price" } }
            },
            {
                $sort: { totalPrice: -1 } //-1 mayor a menor, 1 de menor a mayor
            },
            {
                $group: { _id: 1, orders: { $push: "$$ROOT" } } //$$ROOT estado actual de la agregacion
            },
            {
                $project: { //Generar un nuevo proyecto con los datos previos
                    "_id": 0,
                    orders: "$orders"
                }
            },
            {
                $merge: {
                    into: "reports" //Guardo en la coleccion en la nube los reportes
                }
            }
        ])

        console.log(resultados)*/

    })
    .catch((error) => console.log("Error en conexion con MongoDB ATLAS: ", error))



app.use(express.json())
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})