//import sequalize constructor from library
const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to our database with username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3301
});
module.exports = sequelize;