import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Producto = sequelize.define('product', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

Producto.sync() //Sincronizo con la BDD

export default Producto