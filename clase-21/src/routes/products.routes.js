import { Router } from "express";
import productModel from "../models/products.models.js";

const productRouter = Router()

productRouter.get('/', async (req, res) => {
    const { limit } = req.query
    try {
        const prods = await productModel.find().limit(limit)
        res.status(200).send({ resultado: 'OK', message: prods })
    } catch (error) {
        res.status(400).send({ error: `Error al consultar productos: ${error}` })
    }
})

productRouter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const prod = await productModel.findById(id)
        if (prod)
            res.status(200).send({ resultado: 'OK', message: prod })
        else
            res.status(404).send({ resultado: 'Not Found', message: prod })
    } catch (error) {
        res.status(400).send({ error: `Error al consultar producto: ${error}` })
    }
})

productRouter.post('/', async (req, res) => {
    const { title, description, stock, code, price, category } = req.body

    try {
        const respuesta = await productModel.create({
            title, description, stock, code, price, category
        })

        res.status(200).send({ resultado: 'OK', message: respuesta })
    } catch (error) {
        res.status(400).send({ error: `Error al crear producto: ${error}` })
    }
})

productRouter.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title, description, stock, code, price, category, status } = req.body
    try {
        const respuesta = await productModel.findByIdAndUpdate(id, { title, description, stock, code, price, category, status })
        if (prod)
            res.status(200).send({ resultado: 'OK', message: respuesta })
        else
            res.status(404).send({ resultado: 'Not Found', message: respuesta })
    } catch (error) {
        res.status(400).send({ error: `Error al actualizar producto: ${error}` })
    }
})

productRouter.delete('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const respuesta = await productModel.findByIdAndDelete(id)
        if (prod)
            res.status(200).send({ resultado: 'OK', message: respuesta })
        else
            res.status(404).send({ resultado: 'Not Found', message: respuesta })
    } catch (error) {
        res.status(400).send({ error: `Error al eliminar producto: ${error}` })
    }
})

export default productRouter