//console.log(process.pid)
//console.log(process.memoryUsage())
//console.log(process.env)
//console.log(process.argv) //process.argv[0] ruta a node.exe, en process.argv[1] obtiene el directorio actual
/*
import { Command } from 'commander'

const program = new Command()//Genero un nuevo comando

program
    .option('-d', "Variable para debug", false)
    .option('-p <port>', "Puerto de mi aplicacion", 4000)
    .option('--mode <mode>', "Modo de trabajo", 'Development') //Development -> Testing -> "Optativo" Pre-Production -> Production
    .requiredOption('-u <user>', "User de mi aplicacion", "No se ingreso ningun user")
    .option('-l', "Ingrese letras", " ")
program.parse() //Finalizo toda la configuracion

console.log(program.opts())
console.log(program.args)
*/

import config from "./config.js";

console.log(config)