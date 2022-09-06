const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Paul@2023',
      database: 'tracker'
    });
    connection.connect(function (err) {
      if (err) throw err;
    });
    console.log('Connected to the tracker database.')

    module.exports = connection;