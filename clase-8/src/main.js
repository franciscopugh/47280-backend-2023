import express from 'express'
import multer from 'multer'
import routerProd from './routes/products.routes.js'
import { __dirname } from './path.js'
import path from 'path'
const PORT = 4000
const app = express()

//Config

const storage = multer.diskStorage({
    destination: (req, file, cb) => { //cb => callback
        cb(null, 'src/public/img') //el null hace referencia a que no envie errores
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`) //concateno la fecha actual en ms con el nombre del archivo
        //1232312414heladera-samsung-sv
    }
})

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //URL extensas
const upload = multer({ storage: storage })

//Routes
app.use('/static', express.static(path.join(__dirname, '/public'))) //path.join() es una concatenacion de una manera mas optima que con el +
app.use('/api/product', routerProd)

app.post('/upload', upload.single('product'), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.status(200).send("Imagen cargada")
})

console.log(path.join(__dirname, '/public'))

//Server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})