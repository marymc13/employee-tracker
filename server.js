const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db');
require('console.table');





// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Paul@2023',
      database: 'tracker'
    },
    console.log('Connected to the tracker database.')
  );