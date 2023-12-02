//Declaracion de tipos en las variables

let numero: number | string | boolean | any = 5 //Multiples tipos de datos
let mensaje: string = "Hola!"
let isTrue: boolean = true

numero = NaN

//Funciones

const sumar = (num1: number, num2: number) => {
    return num1 + num2
}

console.log(sumar(10, 5))

/*class Animal {
    constructor(public nombre: string) {

    }

    moverse(velocidad: number): void {
        console.log(`Me muevo a ${velocidad}`)
    }
}

const gatito: Animal = new Animal("Copito de nieve")*/

interface AnimalDomestico {
    raza: string,

}

class Mamifero {
    constructor(public nombre: string) {

    }

    moverse(velocidad: number): void {
        console.log(`Me muevo a ${velocidad}`)
    }
}

class Perro extends Mamifero implements AnimalDomestico {
    constructor(nombre: string, public raza: string) {
        super(nombre)
    }
}

class Gato extends Mamifero {
    constructor(nombre: string) {
        super(nombre)
    }
}