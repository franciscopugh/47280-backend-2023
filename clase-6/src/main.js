/*class General{
    async nombreMetodo() {
        
    }
}

import * as http from 'http'

const PORT = 4000
//req = request y res = response
const server = http.createServer((req, res) => {
    res.end("Hola, que tal?")
})

//Arrancar mi servidor
server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})*/

import express from 'express'

//app va a poder ejecutar todos los metodos de express
const app = express()

const PORT = 4000

//Poder ejecutar queries complejas
app.use(express.urlencoded({ extended: true }))

const productos = [
    {
        nombre: "Lentejas",
        id: 1,
        categoria: "Legumbres"
    },
    {
        nombre: "Mani",
        id: 2,
        categoria: "Snack"
    },
    {
        nombre: "Queso",
        id: 3,
        categoria: "Lacteos"
    },
    {
        nombre: "Yogurt",
        id: 4,
        categoria: "Lacteos"
    }
]

app.get('/', (req, res) => {
    res.send("Hola desde el sur")
})

//res.send() actua como un return implicito
app.get('/productos/:id', async (req, res) => {
    const prod = productos.find(prod => prod.id === parseInt(req.params.id))
    if (prod)
        res.send(prod)
    res.send("Producto no encontrado")
})

app.get('/productos', async (req, res) => {
    const { categoria } = req.query
    const prods = productos.filter(prod => prod.categoria === categoria)
    res.send(prods)
})

//Ruta 404 es la ultima que se define
app.get('*', (req, res) => {
    res.send("Error 404")
})


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

//POR FAVOR PARA DEVOLVER POR LIMITE EN EL ARRAY USEN SLICE Y NO SPLICE