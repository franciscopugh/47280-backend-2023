/*let nombre = "Francisco"
nombre = "Pedro"

//Funcion normal
const NUMBER = 5

function sumar(num1, num2) {
    return num1 + num2
}

//Funcion anonima
const sumar = function (num1, num2) {
    return num1 + num2
}

//funcion flecha
const sumar = (num1, num2) => num1 + num2

const users = ["Oscar", "Pedro"]
*/

//Como exporte sin el default, import con {}
//Si export con default, importo sin llaves
import { Junior, SemiSenior, Senior } from './Empleado.js'
import Empleado from "./Empleado.js"
const empleado1 = new Junior("Pepe", "Perez", 12000, 1, 1)
const empleado2 = new SemiSenior("Lucia", "Luz", 32000, 4, 2)
const empleado3 = new Senior("Paula", "Paredes", 50000, 7, 5)

console.log(empleado1)
console.log(empleado2)
console.log(empleado3)

empleado1.aumentarSalario()
empleado2.aumentarSalario()
empleado3.aumentarSalario()

empleado1.trabajar()
empleado2.asignarTarea(empleado1)
empleado3.asignarProyecto(empleado2)
