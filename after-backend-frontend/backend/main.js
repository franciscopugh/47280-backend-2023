fetch('urlBackend', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'jwtToken'
    },
    body: JSON.stringify("datosFormulario")
})