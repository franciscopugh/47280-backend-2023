import express from 'express'
import { promises as fs } from 'fs'

const app = express()
const PORT = 4000
const PATH = "./src/users.json"

class User {
    constructor(nombre, apellido, email, password) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.password = password
        this.id = User.incrementarID()
    }
    //static significa metodo de clase
    static incrementarID() {
        if (this.idIncrement) { //Atributo de la clase. Si no existe, lo creo. Si existe, lo aumento en 1
            this.idIncrement++ //Si existe, lo aumento en uno
        } else {
            this.idIncrement = 1 //Valor inicial
        }
        return this.idIncrement
    }
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) //Permitir trabajar con el formato JSON en express

app.get('/', (req, res) => {
    res.send("Pagina inicial")
})

app.post('/users', async (req, res) => {
    const { nombre, apellido, email, password } = req.body

    const users = JSON.parse(await fs.readFile(PATH, 'utf-8'))
    const user = users.find(usuario => usuario.email === email)

    if (user) {
        res.status(400).send("Usuario ya existente")
    } else {
        const userClass = new User(nombre, apellido, email, password)
        users.push(userClass)
        await fs.writeFile(PATH, JSON.stringify(users))
        res.status(200).send(`Usuario ${nombre} creado`)
    }


})

app.put('/users/:id', async (req, res) => {
    //Consulto el id ya que el mail puede ser nuevo ya que puede actualizarlo
    const { id } = req.params
    const { nombre, apellido, email, password } = req.body

    const users = JSON.parse(await fs.readFile(PATH, 'utf-8'))
    //Se consulta por el id y no por el mail ya que se espera que el usuario exista
    const userIndex = users.findIndex(usuario => usuario.id === parseInt(id))

    if (userIndex != -1) {
        users[userIndex].nombre = nombre
        users[userIndex].apellido = apellido
        users[userIndex].email = email
        users[userIndex].password = password
        await fs.writeFile(PATH, JSON.stringify(users))
        res.status(200).send(`Usuario ${nombre} actualizado`)

    }
    res.status(400).send("Usuario no existe")

})

app.delete('/users/:id', async (req, res) => {
    const { id } = req.params

    const users = JSON.parse(await fs.readFile(PATH, 'utf-8'))
    //Se consulta por el id y no por el mail ya que se espera que el usuario exista
    const userIndex = users.findIndex(usuario => usuario.id === parseInt(id))

    if (userIndex != -1) {

        await fs.writeFile(PATH, JSON.stringify(users.filter(user => user.id != parseInt(id))))
        res.status(200).send(`Usuario eliminado`)

    }
    res.status(400).send("Usuario no existe")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})