//Este proceso espera un hilo de ejecucion (o proceso hijo) para ejecutarse
process.on('message', message => {
    let resultado = 0

    for (let i = 0; i < 25e9; i++) { //Voy de 0 a 5 mil millones sumando los numeros continuos
        resultado += i
    }
    console.log(process.pid)
    process.send(resultado)
})