const mysql = require('mysql2');

// 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker'
  },
//   Confirmation
  console.log(`You are conneted to Employee_Tracker database.`)  
 );
  

 module.exports = db