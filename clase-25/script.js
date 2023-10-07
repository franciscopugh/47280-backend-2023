import express from 'express'
import { fork } from 'node:child_process'

const app = express()

app.get('/suma', (req, res) => {
    const child = fork('./calculoMatematico.js') //Genero los hilos de ejecucion
    child.send('Ejecutate') //Ejecuto
    child.on('message', resultado => {
        res.send(`${resultado}`)
    })
})

app.listen(4000, () => {
    console.log("Server on port 4000")
})