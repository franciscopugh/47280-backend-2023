import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import { __dirname } from './path.js'

const app = express()

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'franciscopugh3@gmail.com',
        pass: process.env.PASSWORD_EMAIL,
        authMethod: 'LOGIN'
    }
})

app.get('/mail', async (req, res) => {
    const resultado = await transporter.sendMail({
        from: 'TEST Fran franciscopugh3@gmail.com',
        to: 'franciscopugh01@gmail.com',
        subject: 'Saludo de buenas tardes',
        html:
            `
            <div>
                <h1> Hola,buenas noches as sido ackeado </h1>
            </div>
        `,
        attachments: [{
            filename: 'original.jpg',
            path: __dirname + '/image/original.jpg',
            cid: 'original.jpg'
        }
        ]
    })
    console.log(resultado)
    res.send('Mail enviado')
})

app.listen(4000, () => {
    console.log("Server on port 4000")
})