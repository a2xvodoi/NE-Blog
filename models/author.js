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
    createAuthor: (data) =>{
        return new Promise((reslove,reject)=>{
            var sql = 'INSERT INTO author SET ?';
            conn.query(sql,data,(err,result)=>{
                if (err) {
                    reject(err);
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
    changePass: (data) =>{
        return new Promise((reslove,reject)=>{
            var sql = 'UPDATE author SET pass=? WHERE idAuthor = ? and pass = ?';
            conn.query(sql,[data.passNew,data.idAuthor, data.passOld],(err,result)=>{
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