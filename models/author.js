const db = require('../config/db');
const conn = db.getConnection();

module.exports = {
    getAuthorById: (name)=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM author where accountName =?';
            conn.query(sql, [name],(err,result)=>{
                if (err || result.length === 0) {
                    reject('Tác giả không tồn tại!');
                }
                reslove(result);
            })
        })
    },
    
}