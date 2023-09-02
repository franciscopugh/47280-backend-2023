import { Sequelize } from "sequelize";

const sequelize = new Sequelize('testSequelize', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
})

sequelize.authenticate() //Verificion de mi BDD
    .then(() => {
        console.log('Conexion a la BDD')
    })
    .catch((e) => {
        console.log(`Error en conexion a la BDD: ${e}`)
    })

export default sequelize