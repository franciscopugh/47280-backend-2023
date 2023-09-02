import { Router } from 'express'
import Producto from '../models/products.models.js'

const productRouter = Router()

productRouter.get('/', async (req, res) => {
    try {
        const prods = await Producto.findAll()
        res.status(200).send({ mensaje: 'OK', resultado: prods })
    } catch (error) {
        res.status(400).send({ error: `Error al consultar productos: ${error}` })
    }
})

productRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const prod = await Producto.findByPk(id) //Pk = Primary Key que es el id de las tablas SQL
        res.status(200).send({ mensaje: 'OK', resultado: prod })
    } catch (error) {
        res.status(400).send({ error: `Error al consultar producto por id: ${error}` })
    }
})

productRouter.post('/', async (req, res) => {
    const { title, description, code, price, stock, status, category } = req.body

    try {
        const prod = await Producto.create({ title, description, code, price, stock, category })
        res.status(200).send({ mensaje: 'OK', resultado: prod })
    } catch (error) {
        res.status(400).send({ error: `Error al crear producto: ${error}` })
    }
})

productRouter.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title, description, code, price, stock, status, category } = req.body
    try {
        const prod = await Producto.findByPk(id) //Pk = Primary Key que es el id de las tablas SQL
        if (prod) {
            await prod.update({ title, description, code, price, stock, status, category })
            res.status(200).send({ mensaje: 'OK', resultado: prod })
        } else {
            res.status(404).send({ error: `Not Found` })
        }

    } catch (error) {
        res.status(400).send({ error: `Error al actualizar producto por id: ${error}` })
    }
})

productRouter.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const prod = await Producto.findByPk(id) //Pk = Primary Key que es el id de las tablas SQL
        if (prod) {
            await prod.destroy()
            res.status(200).send({ mensaje: 'OK', resultado: prod })
        } else {
            res.status(404).send({ error: `Not Found` })
        }

    } catch (error) {
        res.status(400).send({ error: `Error al borrar producto por id: ${error}` })
    }
})

export default productRouter