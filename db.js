var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'discord',
    database: 'iwp'
  })
  
  con.connect(function(err){
    if(err) throw err;
    else{
      console.log("connected to the local database");
    }
  });

module.exports = con;