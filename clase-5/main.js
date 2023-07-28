/*
    Proceso de encriptacion

    1) Algoritmo de encriptacion
    2) Key o clave
    3) Iv o vector inicial 



import * as crypto from 'crypto'

//console.log(crypto.getCiphers()) //Consultar los tipos de algoritmos de encriptacion

const algoritmo = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const encriptar = (password) => {
    //Poder consultar el Buffer
    const cipher = crypto.createCipheriv(algoritmo, Buffer.from(key), iv) //Objeto para encriptar la contraseña
    cipher.update(password) // Preparo el objeto para encriptar
    let passwordEncriptado = cipher.final() //Resultado de la encriptacion
    console.log(passwordEncriptado.toString('hex'))
    return passwordEncriptado
}

const hackerman = (passwordEncriptada) => {
    const decipher = crypto.createDecipheriv(algoritmo, Buffer.from(key), Buffer.from(iv, 'hex'))
    decipher.update(passwordEncriptada)
    let passwordDes = decipher.final()
    console.log(passwordDes.toString())
}

const passwordE = encriptar("Coder1234")
hackerman(passwordE)*/

import moment from 'moment'

console.log(moment())