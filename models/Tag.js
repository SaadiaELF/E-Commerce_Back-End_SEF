// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from connection.js
const sequelize = require('../config/connection.js');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model { }

// set up fields and rules for Product model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    // Link to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
