import passport from "passport";

//Funcion general retornar errores en las estrategias de passport


//Primer filtro de cualquier estrategia de passport
export const passportError = (strategy) => {
    return async (req, res, next) => {
        passport.authenticate(strategy, (error, user, info) => {
            if (error) {
                return next(error)
            }

            if (!user) {
                return res.status(401).send({ error: info.messages ? info.messages : info.toString() }) //Si me envian info.messages, muestro la respuesta que me enviaron sino muestro el objeto info pasado a string (pueden enviar info.messages = "Usuario no valido" o info = "User no validado")
            }

            req.user = user
            next()
        })(req, res, next) //Esto es por que se trata de un Middlewares
    }
}

//Ingreso un rol y verifico si mi usuario lo cumple (ej; ingreso admin y veo si mi user es admin o no)
export const authorization = (rol) => {

    return async (req, res, next) => {
        //Se vuelve a consultar si el usuario existe dado que: el token puede expirar, el user borrar el historial o se rompe la compu
        if (!req.user) {
            return res.status(401).send({ error: 'User no autorizado' })
        }

        if (req.user.user.rol != rol) { //Si mi usuario tiene un rol distinto al ingresado como parametro
            return res.status(403).send({ error: 'User no tiene los privilegios necesarios' })
        }

        next()
    }

}