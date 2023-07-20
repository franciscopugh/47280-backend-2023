//const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";
/*
let nombre = "Francisco"

console.log(nombre)

console.log(`Hola ${nombre}`)



const elemento = document.getElementById("boton")

//Callback
elemento.addEventListener("click", () => {

})

const numeros = [4, 5, 10, 20]

numeros.forEach((numero) => console.log(numero))

calcularImpuestos(calcularIVA(), calcularIngresosBrutos(), calcularRetenciones(), calcularImpuestosLocales())

const sueldos = [1000, 20000, 40000, 5000]

const consultarSueldos = (confirmacion) => {
    return new Promise((resolve, reject) => {
        if (confirmacion) {
            resolve(sueldos)
        } //Si confirmacion es true, devuelve ya el resultado por lo que no es necesario agregar el else
        reject("Acceso denegado")
    })
}

consultarSueldos(false)
    .then(datosSueldos => console.log(datosSueldos))
    .catch(error => console.log(`Error en consultar sueldos: `, error))
    .finally(console.log("Operacion finalizada"))


fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({ solidario, mep, blue, ccl }) => { //Desestructurar en los parametros
        //const {solidario, mep, blue, ccl = dolar
        console.log(solidario, mep, blue, ccl)

    })

*/
const consultarDolar = async () => {
    const promise = await fetch("https://criptoya.com/api/dolar")
    const datosDolar = await promise.json()
    console.log(datosDolar)
}

consultarDolar()

await ConectBdd.connect()

const conectarBDD = async () => {
    await ConectBdd.connect()
}

conectarBDD()
