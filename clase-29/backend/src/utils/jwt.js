import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const generateToken = (user) => {
    /*
        1° parametro: Objeto asociado al token
        2° parametro: Clave privada para el cifrado
        3° parametro: Tiempo de expiracion
    */
    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '12h' })
    return token
}

export const authToken = (req, res, next) => {
    //Consulto el header
    const authHeader = req.headers.Authorization //Consulto si existe el token
    if (!authHeader) {
        return res.status(401).send({ error: 'Usuario no autenticado' })
    }

    const token = authHeader.split(' ')[1] //Separado en dos mi token y me quedo con la parte valida

    jwt.sign(token, process.env.JWT_SECRET, (error, credentials) => {
        if (error) {
            return res.status(403).send({ error: "Usuario no autorizado" })
        }
        //Descrifo el token
        req.user = credentials.user
        next()
    })
}
