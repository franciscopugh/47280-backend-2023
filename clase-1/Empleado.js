class Empleado {
    constructor(nombre, apellido, sueldo, experiencia, antiguedad) {
        this.nombre = nombre
        this.apellido = apellido
        this.sueldo = sueldo
        this.experiencia = experiencia
        this.antiguedad = antiguedad
    }

    trabajar() {
        console.log("Estoy trabajando")
    }

    cobrarSueldo() {
        console.log("Ya cobree")
    }

    aumentarSalario() { }

}

//HERENCIA
export class Junior extends Empleado { //Un Junior es un empleado, un empleado no necesariamente es un Junior
    constructor(nombre, apellido, sueldo, experiencia, antiguedad) {
        super(nombre, apellido, sueldo, experiencia, antiguedad) //super = superclass = clase padre en este proyecto
        this.tareasAsignadas = []
    }

    //Polimorfismo -> Defino de mi clase padre el metodo aumentarSalario
    aumentarSalario() {
        console.log("Me aumentaron un 15%")
    }
}

export class SemiSenior extends Empleado {
    constructor(nombre, apellido, sueldo, experiencia, antiguedad) {
        super(nombre, apellido, sueldo, experiencia, antiguedad)
        this.proyectosAsignados = []
    }

    aumentarSalario() {
        console.log("Me aumentaron un 35%")
    }

    //METODO PROPIO DE LA CLASE
    asignarTarea(junior) {
        console.log("Asigno junior a tarea")
    }
}

export class Senior extends Empleado {
    constructor(nombre, apellido, sueldo, experiencia, antiguedad) {
        super(nombre, apellido, sueldo, experiencia, antiguedad)
        this.proyectosLiderados = [] //Los proyectos que posee como lider
    }

    aumentarSalario() {
        console.log("Me aumentaron un 55%")
    }

    //METODO PROPIO DE LA CLASE
    asignarProyecto(empleado) {
        console.log(`Asigne a ${empleado.nombre} a un proyecto`)
    }
}

//export default Empleado