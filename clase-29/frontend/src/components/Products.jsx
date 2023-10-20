import { useEffect, useState } from "react"

export const Products = () => {
    const [products, setProducts] = useState([])

    const queryParams = {
        limit: '',
        page: '',
        filter: 'Comida',
        sort: 'asc'
    }
    const queryString = new URLSearchParams(queryParams).toString();

    const fetchProducts = async () => {
        const response = await fetch(`http://localhost:4000/api/product?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })

        if (response.status == 200) {
            const data = await response.json()
            console.log(data.docs)
            console.log(`http://localhost:4000/api/product?${queryString}`)
            setProducts(data.docs)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])



    return (
        <div className="container row">
            {products.map(product =>
                <div className="card" style={{ width: '18rem', margin: '5px' }}>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">{product.category}</p>
                        <p className="card-text">${product.price}</p>
                        <p className="card-text">{product.stock} Unidadades</p>
                        <button className="btn btn-secondary">Ver Producto</button>
                    </div>
                </div>

            )}
        </div>
    )
}