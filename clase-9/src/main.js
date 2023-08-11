import express from 'express'
import multer from 'multer'
import { engine } from 'express-handlebars'
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

app.engine('handlebars', engine()) //Defino que voy a trabajar con hbs y guardo la config
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname, './views'))

const upload = multer({ storage: storage })

//Routes
app.use('/static', express.static(path.join(__dirname, '/public'))) //path.join() es una concatenacion de una manera mas optima que con el +
app.use('/api/product', routerProd)
//HBS
app.get('/static', (req, res) => {
    const user = {
        nombre: "Lucia",
        cargo: "Tutor"
    }

    const cursos = [
        { numCurso: "123", dia: "LyM", horario: "Noche" },
        { numCurso: "456", dia: "MyJ", horario: "Tarde" },
        { numCurso: "789", dia: "S", horario: "Mañana" }
    ]

    //Indicar que plantilla voy a utilizar
    res.render("users", {
        titulo: "Users",
        usuario: user,
        rutaCSS: "users.css",
        isTutor: user.cargo == "Tutor",
        cursos: cursos
    })

})


app.post('/upload', upload.single('product'), (req, res) => {
    console.log(req.file)
    console.log(req.body)
    res.status(200).send("Imagen cargada")
})

//Server
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})