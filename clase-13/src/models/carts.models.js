import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    products: [{
        id_prod: {
            type: Schema.Types.ObjectId, //Id autogenerado de MongoDB
            ref: 'products',
            required: true
        },
        quantity: {
            type: Number,
            required: true //default: 1
        }
    }]
})

const cartModel = model('carts', cartSchema)
export default cartModel