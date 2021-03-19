const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Create a new Sequelize model for categories
class Category extends Model { }

Category.init(
  // Define fields/columns on model
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    // Link to database connection
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
