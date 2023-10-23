import Sequelize from 'sequelize'

const dbName = 'devpet'
const dbUser = 'userpet'
const dbHost = '127.0.0.1'
const dbPassword = '123456'
const dbPort = 3306

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'mysql',
    host: dbHost,
    port: dbPort
})

export default sequelize