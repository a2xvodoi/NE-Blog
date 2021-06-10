const db = require('../config/db');
const conn = db.getConnection();

module.exports = {
    getAllAuthor: ()=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM author';
            conn.query(sql, (err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    getAuthorById: (id)=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM author WHERE idAuthor = ?';
            conn.query(sql,[id],(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    getAuthorByName: (name)=>{
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
    editAuthor: (data) =>{
        return new Promise((reslove,reject)=>{
            var sql = 'UPDATE author SET avatar = ?, accountName=?, pass=?, authorName=?, job =?, intro =? WHERE idAuthor = ?';
            conn.query(sql,[data.avatar, data.accountName, data.pass, data.authorName,data.job, data.intro,data.idAuthor],(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    deleteAuthorByIdAuthor: (id) =>{
        return new Promise((reslove,reject)=>{
            var sql = 'DELETE FROM author WHERE idAuthor = ?';
            conn.query(sql,[id],(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    }
}