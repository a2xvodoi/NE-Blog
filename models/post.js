const db = require('../config/db');
const conn = db.getConnection();

module.exports = {
    getAllPost: ()=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM post join category on post.idCategory = category.idCategory join author on post.idAuthor = author.idAuthor order by updated_at desc ';
            conn.query(sql,(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    getPostByIdPost: (id)=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM post join category on post.idCategory = category.idCategory join author on post.idAuthor = author.idAuthor where post.idpost = ? order by updated_at desc';
            conn.query(sql,id,(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    getPostByIdCategory: (id)=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM post join category on post.idCategory = category.idCategory join author on post.idAuthor = author.idAuthor where post.idCategory =? order by updated_at desc';
            conn.query(sql,id,(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    getPostByIdAuthor: (id)=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM post join category on post.idCategory = category.idCategory join author on post.idAuthor = author.idAuthor where post.idAuthor=? order by updated_at desc';
            conn.query(sql, id, (err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    getPostByIdPostAuthor: (idP, idA)=>{
        return new Promise((reslove,reject)=>{
            var sql = 'SELECT * FROM post join category on post.idCategory = category.idCategory join author on post.idAuthor = author.idAuthor where post.idpost = ? and post.idAuthor =? order by updated_at desc';
            
            conn.query(sql,[idP,idA], (err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    insertPostByAuthor: (data) =>{
        return new Promise((reslove,reject)=>{
            var sql = 'INSERT INTO post SET ?' ;
            conn.query(sql,data,(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    editPostByAuthor: (data) =>{
        return new Promise((reslove,reject)=>{
            var sql = 'UPDATE post SET title = ?, content=?, pre=?, idCategory=?, updated_at =? WHERE idpost = ?';
            conn.query(sql,[data.title, data.content, data.pre, data.idCategory,new Date(), data.idpost],(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    deletePostByIdPost: (id) =>{
        return new Promise((reslove,reject)=>{
            var sql = 'DELETE FROM post WHERE idpost = ?';
            conn.query(sql,[id],(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
    deletePostByIdAuthor: (id) =>{
        return new Promise((reslove,reject)=>{
            var sql = 'DELETE FROM post WHERE idAuthor = ?';
            conn.query(sql,[id],(err,result)=>{
                if (err) {
                    reject(err);
                }
                reslove(result);
            })
        })
    },
}