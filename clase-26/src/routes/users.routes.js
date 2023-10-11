import { Router } from "express";
import { userModel } from "../models/users.models.js";
import { createHash } from "../utils/bcrypt.js";
import passport from "passport";

const userRouter = Router()
/*
const { first_name, last_name, email, password, age } = req.body
    console.log(password)
    try {
        const hashPassword = createHash(password)
        const response = await userModel.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashPassword,
            age: age
        })
        res.status(200).send({ mensaje: 'Usuario creado', respuesta: response })
    } catch (error) {
        res.status(400).send({ error: `Error en create user: ${error}` })
    }

*/
userRouter.post('/', passport.authenticate('register'), async (req, res) => {
    try {
        if (!req.user) {
            return res.status(400).send({ mensaje: 'Usuario ya existente' })
        }
        return res.status(200).send({ mensaje: 'Usuario creado' })
    } catch (error) {
        res.status(500).send({ mensaje: `Error al crear usuario ${error}` })
    }
})

export default userRouter