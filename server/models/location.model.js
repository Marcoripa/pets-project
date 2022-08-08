//CREATE A MODEL. A model represent a table in your database
const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    //Define 'Location' model
    return sequelize.define("Location", {
        //Define model attribute
        Location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Address: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}