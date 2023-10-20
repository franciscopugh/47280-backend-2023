import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const formRef = useRef(null)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formRef.current)
        const datForm = new FormData(formRef.current) //Transforma un HTML en un objeto iterador
        const data = Object.fromEntries(datForm) //Dado un objeto iterator me lo transforma en un objeto simple


        const response = await fetch('http://localhost:4000/api/sessions/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)

        })

        if (response.status == 200) {
            const datos = await response.json()
            document.cookie = `jwtToken=${datos.token}; expires=${new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toUTCString()};path=/`
            navigate('/products')
        } else {
            console.log("Login invalido")
        }
    }
    return (
        <div className='container'>
            <h2>Formulario de login</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="mb-3">
                    <label htmlFor="email">Ingrese su email:</label>
                    <input type="mail" name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Ingrese su contraseña:</label>
                    <input type="password" name='password' />
                </div>
                <button type='submit' className='btn btn-dark'>Iniciar Sesion</button>

            </form>
        </div>
    )
}