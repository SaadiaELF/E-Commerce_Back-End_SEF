# E-Commerce_Back-End_SEF [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
-----------------------------------------------------------------------------------------------------------------------
Table of content :

* [Purpose](#Purpose)
* [Method](#Method)
* [Node.js](#Nodejs)
* [JavaScript](#JavaScript) 
* [MySQL Workbench](#MySQL-Workbench) 
* [Insomnia](#Insomnia) 
* [Demonstration](#Demonstration)
* [URLs](#URLs) 

-----------------------------------------------------------------------------------------------------------------------

## Purpose

The main purpose of this project is to build the back end for an e-commerce site by configuring a working Express.js API to use Sequelize to interact with a MySQL database.
-----------------------------------------------------------------------------------------------------------------------

## Method

This application is created using the following languages, libraries and software.

    * Node.js
    * Javascript
    * VS Code
    * MySQL Workbench
    * Insomnia
    * Github
   
-----------------------------------------------------------------------------------------------------------------------

## Nodejs
    
This open-source back-end JavaScript runtime environment is used to invoke the application using the following commands :

    * npm init -y : to intialise node
    * nmp i mysql2: to install the mysql2 package
    * nmp i express : to install the express package
    * nmp i dotenv : to install the dotenv package
    * nmp i sequelize : to install the sequelize package
    * node seeds/index.js OR npm run seed : to seed the database 
    * node server.js OR npm start : to listen to the server
-----------------------------------------------------------------------------------------------------------------------

## JavaScript 

This programming language is used to create these files :

* config/connection.js : creates connection to the database
* models/Category.js, models/Product.js, models/ProductTag.js, models/Tag.js : holds the models 
* models/index.js : holds association methods between models
* routes/ : holds routes to perform create, read, update, and delete operations using Sequelize models
* seeds/ : holds seeds files for each model
* index.js : Connects to the server

-----------------------------------------------------------------------------------------------------------------------

## MySQL Workbench

This visual database design tool is used to create the database from schema.sql file following this steps :

1. Open the MySQL Workbench
2. Create or Use an existing connection 
3. Open schema.sql 
3. Execute the script

-----------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------

## Insomnia

This API testing tool is used to test routes :

* Categories routes :
    * GET All categories route : http://localhost:3001/api/categories
    * GET category by Id route : http://localhost:3001/api/categories/id
    * CREATE new category route : http://localhost:3001/api/categories
    * UPDATE category by Id route : http://localhost:3001/api/categories/id
    * DELETE category by Id route : http://localhost:3001/api/categories/id

* Products routes :
    * GET All products route : http://localhost:3001/api/products
    * GET product by Id route : http://localhost:3001/api/products/id
    * CREATE new product route : http://localhost:3001/api/products
    * UPDATE product by Id route : http://localhost:3001/api/products/id
    * DELETE product by Id route : http://localhost:3001/api/products/id   

* Tags routes :
    * GET All tags route : http://localhost:3001/api/tags
    * GET tag by Id route : http://localhost:3001/api/tags/id
    * CREATE new tag route : http://localhost:3001/api/tags
    * UPDATE tag by Id route : http://localhost:3001/api/tags/id
    * DELETE tag by Id route : http://localhost:3001/api/tags/id   
    
-----------------------------------------------------------------------------------------------------------------------

## Demonstration
* Categories routes : ![Demo01](./assets/Categories.gif)
* Products routes : ![Demo02](./assets/Products.gif)
* Tags routes : ![Demo03](./assets/Tags.gif)
-----------------------------------------------------------------------------------------------------------------------

## URLs
* The walkthrough video: https://drive.google.com/file/d/1-yPS7c5Ub8-ufqSKVRzkcAliUB0NICI9/view?usp=sharing

* The URL of the GitHub repository: https://github.com/SaadiaELF/E-Commerce_Back-End_SEF.git

-----------------------------------------------------------------------------------------------------------------------
