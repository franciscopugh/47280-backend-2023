import { Schema, model } from "mongoose";
import paginate from 'mongoose-paginate-v2'

const orderSchema = new Schema({
    name: String,
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

orderSchema.plugin(paginate)

export const orderModel = model('order', orderSchema)