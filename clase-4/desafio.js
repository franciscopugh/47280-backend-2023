class ProductManager {
    constructor() {
        this.products = []
    }
    //Retornar todos los productos
    getProducts() {
        return this.products
    }

    getProductById(id) {
        let product = this.products.find(prod => prod.id == id) //Obj o undefined

        if (product) {
            return product
        }
        return "Not Found"
    }

    addProduct(product) {
        if (this.products.find(prod => prod.code == product.code)) {
            return "Producto ya presente con este codigo"
        }

        if (product.code != "" || product.stock >= 0) {
            this.products.push(product)
        } else {
            return "No puedo cargar un producto vacio"
        }

    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementarID()
    }
    //static significa metodo de clase
    static incrementarID() {
        if (this.idIncrement) { //Atributo de la clase. Si no existe, lo creo. Si existe, lo aumento en 1
            this.idIncrement++ //Si existe, lo aumento en uno
        } else {
            this.idIncrement = 1 //Valor inicial
        }
        return this.idIncrement
    }
}

const product1 = new Product("Arroz", "Rico", 1000, "", "123", 20)
const product2 = new Product("Arroz", "Rico", 1000, "", "456", 20)

const productManager = new ProductManager()

productManager.addProduct(product1)
productManager.addProduct(product2)

console.log(productManager.getProducts())
console.log(productManager.getProductById(2))
