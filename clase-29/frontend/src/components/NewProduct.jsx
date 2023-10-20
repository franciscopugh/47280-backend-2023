import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const NewProduct = () => {
    const formRef = useRef(null)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formRef.current)
        const datForm = new FormData(formRef.current) //Transforma un HTML en un objeto iterador
        const data = Object.fromEntries(datForm) //Dado un objeto iterator me lo transforma en un objeto simple

        const cookieArray = document.cookie.split('; ')
        let token = null
        for (const cookie of cookieArray) {
            const [name, value] = cookie.split("=")
            if (name == "jwtToken") {
                token = value
                break
            }
        }
        console.log(token)
        const response = await fetch('http://localhost:4000/api/product', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (response.status == 200) {
            const datos = await response.json()
            console.log(datos)
            navigate('/products')
        } else {
            console.log("Error en crear producto")
        }
    }

    return (
        <div className='container'>
            <h2>Formulario de Creacion de Producto</h2>
            <form onSubmit={handleSubmit} ref={formRef}>
                <div className="mb-3">
                    <label htmlFor="title">Ingrese el nombre: </label>
                    <input type="text" name='title' />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Ingrese la descripcion: </label>
                    <input type="text" name='description' />
                </div>
                <div className="mb-3">
                    <label htmlFor="category">Ingrese la categoria: </label>
                    <input type="text" name='category' />
                </div>
                <div className="mb-3">
                    <label htmlFor="price">Ingrese el precio: </label>
                    <input type="number" name='price' />
                </div>
                <div className="mb-3">
                    <label htmlFor="stock">Ingrese el stock:</label>
                    <input type="number" name='stock' />
                </div>
                <button type='submit' className='btn btn-dark'>Crear Producto</button>
            </form>
        </div>
    )
}