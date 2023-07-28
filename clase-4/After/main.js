import { promises as fs } from 'fs'

const addProduct = async (product) => {
    //Consulto el txt y lo parseo
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    //Consulto si mi producto ya existe en el txt
    if (products.find(producto => producto.id == product.id)) {
        return "Producto ya agregado"
    }
    //Lo agrego al array al ya saber que no existe
    products.push(product)
    //Parsearlo y guardar el array modificado
    await fs.writeFile('./productos.txt', JSON.stringify(products))
}

const getProducts = async () => {
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    console.log(products)
}

const getProductById = async (id) => {
    //En el productManager, la ruta esta en this.path
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    const prod = products.find(producto => producto.id === id)
    if (prod) {
        console.log(prod)
    } else {
        console.log("Producto no existe")
    }
}

const updateProduct = async (id, { nombre }) => {
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    const indice = products.findIndex(prod => prod.id === id)

    if (indice != -1) {
        //Mediante el indice modifico todos los atributos de mi objeto
        products[indice].nombre = nombre
        //Resto de los atributos presentes
        await fs.writeFile('./productos.txt', JSON.stringify(products))
    } else {
        console.log("Producto no encontrado")
    }
}

const deleteProduct = async (id) => {
    const products = JSON.parse(await fs.readFile('./productos.txt', 'utf-8'))
    const prods = products.filter(prod => prod.id != id)
    await fs.writeFile('./productos.txt', JSON.stringify(prods))
}

const product = { nombre: "Arroz", id: 2 }

//addProduct(product)
//getProducts()
//getProductById(3)
//updateProduct(4, { nombre: "Espinaca" })
deleteProduct(2)