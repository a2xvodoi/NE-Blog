const db = require('../config/db');
const conn = db.getConnection();

module.exports = {
    getUserById: (id)=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM User WHERE idUser = ?';
            conn.query(sql,[id],(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    getUserByUserName: (name)=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM User where userName =?';
            conn.query(sql, [name],(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    editUser: (data) =>{
        return new Promise((reslove,reject)=>{
            var sql = 'UPDATE User SET avatar = ?, accountName=?, pass=?, UserName=?, job =?, intro =? WHERE idUser = ?';
            conn.query(sql,[data.avatar, data.accountName, data.pass, data.UserName,data.job, data.intro,data.idUser],(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
}
