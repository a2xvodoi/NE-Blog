const post_md = require('../../models/post');
const category_md = require('../../models/category');
const author_md = require('../../models/author');

module.exports ={
    postInfo: (req, res, next) =>{
        author_md.getAuthorById(req.session.author.idAuthor)
        .then(data =>{
            res.render('client/infoAuthor',{
                title: 'Thông tin cá nhân',
                data: data[0],
                author: req.session.author ?? 0 ,
            })
        })
        .catch(err =>{
            res.status(500).send('Có lỗi xảy ra');
        })
    },
    putInfo: async (req, res, next) =>{
        var data = req.body;
        try {
            const author = await author_md.getAuthorById(data.idAuthor);
            data = {
                idAuthor: data.idAuthor,
                accountName: data.accountName ? data.accountName : author[0].accountName,
                pass: data.pass ? data.pass : author[0].pass,
                authorName: data.authorName ? data.authorName : author[0].authorName,
                job: data.job,
                intro: data.intro,
                avatar: req.file ? req.file.filename : author[0].avatar,
            }
            author_md.editAuthor(data);
            res.json({status: 200});
            
        } catch (error) {
            res.json({status: 500});
        }
        
    },
    changePass: (req, res, next) =>{
        author_md.changePass({
            idAuthor: req.session.author.idAuthor,
            passOld: req.body.passOld,
            passNew: req.body.passNew,
        })
        .then(data =>{
            res.json({
                status:200,
                success: data.changedRows,
            });
        })
        .catch(err =>{
            res.json({status:500});
        })
    },
    listPostByAuthor: (req, res, next) =>{
        post_md.getPostByIdAuthor(req.params.id)
        .then(data=>{
            res.render('client/authorPost',{
                title: data[0].authorName,
                data: data,
                author: data[0],
                err: false,
            });
        })
        .catch(err =>{
            res.render('client/authorPost',{
                title: 'Lỗi',
                err: 'Không tìm thấy bài viết nào',
                data: false,
                author: false,
            });
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
        post_md.getPostByIdPostAuthor(req.params.id, req.session.author.idAuthor)
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
        Promise.all([post_md.getPostByIdPostAuthor(req.params.id,req.session.author.idAuthor),category_md.getAllCategory()])
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
