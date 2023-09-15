import { Router } from "express";
import { userModel } from "../models/users.models.js";

const userRouter = Router()

userRouter.post('/', async (req, res) => {
    const { first_name, last_name, email, password, age } = req.body
    try {
        const response = await userModel.create({ first_name, last_name, email, password, age })
        res.status(200).send({ mensaje: 'Usuario creado', respuesta: response })
    } catch (error) {
        res.status(400).send({ error: `Error en create user: ${error}` })
    }

})

export default userRouter