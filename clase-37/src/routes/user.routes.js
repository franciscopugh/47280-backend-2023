import { Router } from "express";
import { sendRecoveryEmail } from "../config/nodemailer.js";
import crypto from 'crypto'


const userRouter = Router()
const recoveryLinks = {}
userRouter.post('/password-recovery', (req, res) => {

    const { email } = req.body
    //Verificion de usuario existente

    try {
        const token = crypto.randomBytes(20).toString('hex') //Token unico con el fin de no utilizar JWT para algo simple

        recoveryLinks[token] = { email, timestamp: Date.now() }

        const recoveryLink = `http://localhost:8000/api/users/reset-password/${token}`
        console.log(token)
        sendRecoveryEmail(email, recoveryLink)

        res.status(200).send('Correo de recuperacion enviado correctamente')
    } catch (error) {
        res.status(500).send('Error al enviar correo de recuperacion: ', error)
    }
})

userRouter.post('/reset-password/:token', (req, res) => {
    const { token } = req.params
    const { newPassword, oldPassword, code } = req.body
    try {
        //Verifico que el token es valido y no ha expirado (1 hora)
        const linkData = recoveryLinks[token]
        console.log(token)
        if (linkData && Date.now() - linkData.timestamp <= 3600000) {
            const { email } = linkData

            console.log(email)
            console.log(newPassword)
            console.log(oldPassword)

            //Cambio de contraseña (modificar cliente)

            //Consulto si la nueva contraseña es distinta a la antigua

            delete recoveryLinks[token]

            res.status(200).send('Contraseña modificada correctamente')

        } else {
            res.status(400).send('Token invalido o expirado. Pruebe nuevamente')
        }
    } catch (error) {
        res.status(500).send('Error al cambiar contraseña de cliente: ', error)
    }

})

export default userRouter