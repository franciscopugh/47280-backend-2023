import { Router } from "express";
import cartModel from "../models/carts.models.js";

const cartRouter = Router()

cartRouter.post('/:cid/products/:pid', async (req, res) => {
    const { cid, pid } = req.params
    const { quantity } = req.body
    try {
        const cart = await cartModel.findById(cid)
        if (cart) {
            cart.products.push({ id_prod: pid, quantity: quantity })
            const respuesta = await cartModel.findByIdAndUpdate(cid, cart) //Actualizo el carrito de mi BDD con el nuevo producto
            res.status(200).send({ respuesta: 'OK', mensaje: respuesta })
        }
    } catch (e) {
        res.status(400).send({ error: e })
    }
})

export default cartRouter