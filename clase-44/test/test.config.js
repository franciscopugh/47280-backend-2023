import mongoose from "mongoose";
import chai from 'chai'
import supertest from "supertest";

const app = await mongoose.connect(`mongodb+srv://franciscopugh01:@cluster0.dig3fu3.mongodb.net/?retryWrites=true&w=majority`)

const requester = supertest('http://localhost:4000')

const { expect } = chai

describe('Test de Usuario y carrito', async () => {

    let token = {}
    let cartId = ""
    let userId = ""
    const newUser = {
        "first_name": "Panchito",
        "last_name": "Perez",
        "email": "perezito@perez.com",
        "password": "coderhouse"
    }


    it("Ruta: api/session/register para crear usuario"), async () => {

        const { __body, status } = await requester.post('api/session/register').send(newUser)

        expect(status).to.equal(200)

        console.log(`Status: ${__body}`)
    }

    it("Ruta: api/session/login con el metodo POST"), async () => {

        const response = await requester.post('api/session/login').send(newUser)
        const { __body } = response
        const tokenResult = response.header['jwt-cookie'][0]

        expect(tokenResult).to.be.ok //Comprobar la existencia o no del elemento

        expect(response.status).to.be.equal(200) //Consulto si la respuesta de la peticion es igual a 200

        token = {
            name: tokenResult.split("=")[0],
            value: tokenResult.split("=")[1]
        }

        expect(token.value).to.be.ok
        expect(token.name).to.be.ok.and.equal('jwtCookie')
        expect(__body.cartId).to.be.ok

        userId = __body._id
        cartId = __body.cartId
        console.log(`Token: ${token.name} = ${token.value}`)
    }

    it('Ruta: api/carts/product/pid con metodo POST', async () => {
        const cid = cartId
        const pid = ""

        /* await requester.post(`/api/carts/products/${pid}`).set('Cookie', [`${token.name} = ${token.value}`]) AGREGAR DOS VECES EL MISMO PRODUCTO*/

        const { __body, status } = await requester.post(`/api/carts/${cid}/product/${pid}`).set('Cookie', [`${token.name} = ${token.value}`])

        expect(status).to.equal(200)

        console.log("Agregado producto en api carts")
        console.log(`Producto: ${__body.products}`)

    })

    it('Ruta: api/carts/cid/product/pid Metodo PUT', async () => {
        const cid = cartId
        const pid = ""
        const newQuantity = { quantity: 6 }

        const { __body, status } = await requester.put(`/api/carts/${cid}/product/${pid}`).send(newQuantity).set('Cookie', [`${token.name} = ${token.value}`])

        expect(status).to.equal(200)

        console.log("Cantidad producto actualizada en api carts")
        console.log(`Status: ${__body}`)
    })



    it('Ruta: api/users/uid metodo DELETE'), async () => {
        const uid = userId

        const { __body, status } = await requester.delete(`/api/users/${uid}`).set('Cookie', [`${token.name} = ${token.value}`])

        expect(status).to.equal(200)

        console.log("Usuario eliminado en api/users")
        console.log(`Status: ${__body}`)

    }
})