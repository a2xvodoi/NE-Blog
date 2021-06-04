const db = require('../config/db');
const conn = db.getConnection();

module.exports = {
    getAllCategory: ()=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM category';
            conn.query(sql,(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    
}