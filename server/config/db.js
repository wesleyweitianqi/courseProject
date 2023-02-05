const mysql = require('mysql2');
require('dotenv').config();

const passward = process.env.PASSWORD;
const db = mysql.createPool({
  host:'3.16.48.111',
  user:'root',
  password: passward,
  port:'3306',
  database: 'courseProject',
})
//verify db connection
// const sql = 'select * from user;'
// db.query(sql, (err,res)=> {
//   if (err) {
//     console.log(err.message)
//   }
//   console.log("dbres", res);
// })
module.exports = db;

