import { Router } from "express";
import { userModel } from "../models/users.model.js";

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({ error: `Error al consultar users:  ${error}` })
    }
})

userRouter.post('/', async (req, res) => {
    try {
        const { nombre, apellido, edad, password, email } = req.body
        //Verificacion de datos
        const resultado = await userModel.create({
            nombre, apellido, edad, password, email
        })
        res.status(200).send(resultado)
    } catch (error) {
        res.status(400).send({ error: `Error al crear users:  ${error}` })
    }
})

export default userRouter