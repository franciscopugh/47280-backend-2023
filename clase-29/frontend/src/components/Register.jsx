import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const formRef = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formRef.current)
        const datForm = new FormData(formRef.current) //Transforma un HTML en un objeto iterador
        const data = Object.fromEntries(datForm) //Dado un objeto iterator me lo transforma en un objeto simple

        const response = await fetch('http://localhost:4000/api/sessions/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)

        })

        if (response.status == 200) {
            const datos = await response.json()
            console.log(datos)
            navigate('/login')
        } else {
            console.log("Registro invalido")
        }
    }

    return (
        <div className='container'>
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="mb-3">
                    <label htmlFor="first_name">Ingrese su nombre: </label>
                    <input type="text" name='first_name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name">Ingrese su apellido: </label>
                    <input type="text" name='last_name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="age">Ingrese su edad: </label>
                    <input type="number" name='age' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Ingrese su email:</label>
                    <input type="mail" name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Ingrese su contraseña:</label>
                    <input type="password" name='password' />
                </div>
                <button type='submit' className='btn btn-dark'>Registrar</button>

            </form>
        </div>
    )
}