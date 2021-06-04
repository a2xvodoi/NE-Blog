const post_md = require('../../models/post');
const category_md = require('../../models/category');

module.exports ={
    listPostByAuthor: (req, res, next) =>{
        post_md.getPostByIdAuthor(req.params.id)
        .then(data=>{
            res.render('client/authorPost',{
                title: data[0].authorName,
                data: data,
                author: {
                    name: data[0].authorName,
                }
            });
        })
        .catch(err =>{
            console.log('Err: ' + err);
        })
    },
    postIndex: (req, res, next) =>{
        post_md.getPostByIdAuthor(req.session.author.idAuthor)
        .then(data=>{
            res.render('client/postOfAuthor',{
                title: 'Bài viết của tôi',
                data: data,
                author: req.session.author ?? 0 ,
            });
        })
        .catch(err =>{
            console.log('Err: ' + err);
        })
    },
    getDetail: (req, res, next) =>{
        post_md.getPostByIdPost(req.params.id)
        .then(data=>{
            res.render('client/detailPostOfAuthor',{
                title: 'Chi tiết bài viết',
                data: data[0],
                author: req.session.author ?? 0 ,
            });
        })
        .catch(err =>{
            console.log('Err: ' + err);
        })
    },
    getCreatePost: (req, res, next) =>{
        category_md.getAllCategory()
        .then(data=>{
            res.render('client/createPost',{
                title: 'Thêm mới bài viết',
                data: data,
                author: req.session.author ?? 0 ,
            });
        })
        .catch(err =>{
            console.log('Err: ' + err);
        })
    },
    createPost: (req, res, next) =>{
        var data = req.body;
        var now = new Date();
        data.created_at = now;
        data.updated_at = now;
        data.idAuthor = req.session.author.idAuthor;
        
        post_md.insertPostByAuthor(data)
        .then(data =>{
            res.redirect('/author/post');
        })
        .catch(err =>{
            console.log('Err: ' + err);
        })
    },
    getEditPost: (req, res, next) =>{
        Promise.all([post_md.getPostByIdPostAuthor(req.params.id,1),category_md.getAllCategory()])
        .then(([data,category]) =>{
            res.render('client/editPost',{
                title: 'Sửa bài viết',
                data: data[0],
                category: category,
                author: req.session.author ?? 0 ,
            });
        })
        .catch(err =>{

        })
    },
    editPost: (req, res, next) =>{
        var data = req.body;
        var now = new Date();
        data.updated_at = now;
        data.idAuthor = req.session.author.idAuthor;
        
        post_md.editPostByAuthor(data)
        .then(data =>{
            res.redirect('/author/post');
        })
        .catch(err =>{
            console.log('Err: ' + err);
        })
    },
    deletePost: (req, res, next) =>{
        post_md.deletePostByIdPost(req.params.id)
        .then(data=>{
            res.redirect('/author/post');
        })
        .catch(err =>{
            res.redirect('/author/post');
        })
    }
}
