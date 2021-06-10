const post_md = require('../../models/post');
const author_md = require('../../models/author');

module.exports ={
    index : (req, res, next) =>{
        post_md.getAllPost()
        .then(data=>{
            res.render('client/index', { 
                title: 'Blog',
                data: data,
                author: req.session.author ?? 0 ,
            });
        })
        .catch(err =>{
            res.render('client/index', { 
                title: 'Lỗi',
                data: {
                    statusErr: true,
                    err : 'Không lấy được dữ liệu!!!',
                },
                author: req.session.author ?? 0 ,
            });
        })
    },
    search: (req, res, next) =>{
        const q = req.query.q;
        post_md.getAllPost()
        .then(post =>{
            var result = [];
            post.forEach(item => {
                if (item.title.toLowerCase().indexOf(q.toLowerCase()) !== -1) {
                    result.push(item);
                }
            });
            res.render('client/search',{
                title: 'Tìm kiếm ' + q,
                data: result,
                q: q,
                author: req.session.author ?? 0 ,
            })
            //res.json(result);
        })
        .catch(err =>{
            res.render('error');
        })
    },
    detailBlog : (req, res, next) =>{
        
        post_md.getPostByIdPost(req.params.id)
        .then(data=>{
            if (data[0] == undefined) {
                res.render('client/detailPost', { 
                    title: 'Lỗi',
                    data: {
                        statusErr: true,
                        err: 'Không tìm thấy bài viết!!!',
                    },
                    author: req.session.author ?? 0 ,
                });
            }
            res.render('client/detailPost', { 
                title: 'Chi tiết bài viết',
                data: data[0],
                author: req.session.author ?? 0 ,
            });
        })
        .catch(err =>{
            res.render('client/detailPost', { 
                title: 'Lỗi',
                data: {
                    statusErr: true,
                    err: 'Không tìm thấy bài viết!!!',
                },
                author: req.session.author ?? 0 ,
            });
        })
    },
    getLogin: (req, res, next) =>{
        res.render('client/login',{
            title: 'Đăng nhập',
            err: false,
            values: {},
        });
    },
    login: (req, res, next) =>{
        var data = req.body;

        author_md.getAuthorByName(req.body.accountName)
        .then(author =>{
            if (author[0].pass === data.pass) {
                req.session.author = author[0];
                res.redirect('/');
                return;
            }
            res.render('client/login',{
                title: 'Đăng nhập',
                err: {
                    errPass: 'Mật khẩu không chính xác',
                },
                values: {
                    name: data.accountName,
                    pass: data.pass,
                }
            });
        })
        .catch(err =>{
            res.render('client/login',{
                title: 'Đăng nhập',
                err: {
                    errName: 'Tên đăng nhập không chính xác',
                },
                values: {
                    name: data.accountName,
                    pass: data.pass,
                }
            });
        })
        
    },
    logout: (req, res, next) =>{
        req.session.author = false;
        res.redirect('/login');
    }
}