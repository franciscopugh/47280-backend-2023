const socket = io()

const form = document.getElementById('formProduct')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target) //El formulario que disparo el evento
    const prod = Object.fromEntries(datForm) //Dado un objeto iterable, te devuelvo sus datos en un objeto simple
    socket.emit('nuevoProducto', prod)
    socket.on('mensajeProductoCreado', (mensaje) => {

        Swal.fire(
            mensaje
        )
    })
    e.target.reset()
})

