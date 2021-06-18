const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'sql10.freemysqlhosting.net',
  port     : '3306',
  user     : 'sql10419809',
  password : 'eLjf33MVAs',
  database: 'sql10419809',
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = {
    getConnection: ()=>{
        if (!connection) {
            connection.connect();
        }
        return connection;
    }
}