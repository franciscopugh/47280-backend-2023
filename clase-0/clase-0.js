//Copia de tipos primitivos
/*let nombre = "Francisco"

let edad = 40 //0x0800

//Se copian los valores
let edad1 = "40" //0x0800
let edad2 = edad1 //0x1200 = "40"

//Si no se define el tipo de variable, es var

console.log(edad1)
console.log(edad2)

//Copia de tipos objeto

let user1 = {
    nombre: "Pepe", apellido: "Perez", mascotas: [
        { nombre: "Copito de nieve", animal: "Gato", cantCrias: [] },
        { nombre: "Pirata", animal: "Perro" }
    ]
} //0x900
//let user2 = { ...user1 }
let user2 = structuredClone(user1) //0x900 //Copiame valor, no referencia

user2.nombre = "Sancho"
user2.mascotas[0] = null

user1.mascotas[1].nombre = "Daredevil"
console.log(user1)
console.log(user2)
*/
let user1 = { nombre: "Pedro", apellido: "Parker" }
user1 = null //Eliminar la referencia a memoria
const user = { nombre: "Pedro", apellido: "Parker" }
user.nombre = null
user.apellido = null
//user = null
console.log(user)