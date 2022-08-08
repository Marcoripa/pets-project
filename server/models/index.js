//CONNECT DATABASE THROUGHT SEQUELIZE

// 1) import Sequelize library
const { Sequelize } = require("sequelize");

// 2) Import Database configuration
const config = require("../config/db.config");

// 3) Create a Sequelize instance and pass the params to connect the db
const sequelize = new Sequelize(config.DATABASE, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
  });

//test database connection
async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log("Connection has been established successfully.")
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

//Syncronize db
async function syncronizeDb() {
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
  }

const db = {}
//Call the define model function by passing sequelize as parameter. Save the instance as a property of db
db.location = require('./location.model')(sequelize)

module.exports = { testConnection, db, syncronizeDb };