const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'blog',
  password : 'Viet16112000',
  database: 'blog',
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