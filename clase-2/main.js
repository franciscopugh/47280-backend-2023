//ECMA 7
/*let numero = 5

console.log(Math.pow(numero, 3))
console.log(numero ** 3)

const equipo = [
    "Mariano", "Julieta", "Maria"
]

if (equipo.includes("Mariano")) {
    //Si existe un tutor adjunto
    console.log("Encontre a Mariano")
} else {
    console.log("No existe un Mariano en esta comision")
}*/

//ECMA 8
/*
const empleados = [
    { nombre: "Pedro", apellido: "Parker", sueldo: 20000 },
    { nombre: "Ana", apellido: "Alvarez", sueldo: 25000 },
    { nombre: "Tomas", apellido: "Tamarez", sueldo: 32000 },
    { nombre: "Azul", apellido: "Alvarez", sueldo: 22000 }
]

const empleado1 = empleados[0]
console.log(Object.keys(empleado1)) //Me devuelve en un array las claves o propiedades de mi objeto
console.log(Object.values(empleado1)) //Me devuelve en un array el valor de las keys de mi objeto
Object.entries(empleado1).forEach(props => console.log(props))

//ECMA 9

//Nunca especifico la cantidad de numeros posibles a ingresar

function sumar(...num) { //REST me los guarda en un array
    console.log(num.reduce((prev, act) => prev + act, 0))
    //console.log(...num) //SPREAD le elimino el objeto array
}

sumar(5, 5, 20, 30, 40, 50, 10, 40)*/
/*
//ECMA 10

let nombre = " Francisco "
let cadenaSinVacios = nombre.trim()
console.log(cadenaSinVacios)

const facturas = [5, 10, 50, 20, 30, 40, [40, [[20]]], 10]

const facturasPisadas = facturas.flat(3) //Elimino un nivel del array

console.log(facturasPisadas.reduce((a, b) => a + b, 0))

//import '' from ''

let opcion = "restar"

if (opcion == "sumar") {
    import('./calculadora.js').then(modulo => { //Importo dinamicamente la funcion sumar solamente cuando la opcion sea igual a 1
        modulo.sumar(5, 10)
    })
} else if (opcion == "restar") {
    import('./calculadora.js').then(modulo => { //Importo dinamicamente la funcion sumar solamente cuando la opcion sea igual a 1
        modulo.restar(5, 10)
    })
} else {
    console.log("No se quiere usar calculadora")
}
*/

//ECMA 11

const sueldos = [5000, 10000, 30000, undefined, 15500]
let acum = 0
sueldos.forEach((sueldo, indice) => {
    //Si este valor sueldo es null o undefined, devulevo el de la derecha
    acum += sueldo ?? 0

    if (!sueldo) {
        console.log("Error en el sueldo en posicion ", indice)
    }


})

console.log(acum)