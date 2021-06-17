const author_md = require('../../models/author');
const post_md = require('../../models/post');

module.exports = {
    index: (req, res, next) =>{
        author_md.getAllAuthor()
        .then(data =>{
            res.render('admin/author/index',{
                data: data,
                user: req.session.admin,
            })
        })
        .catch(err =>{

        })
        
    },
    create: (req, res, next) =>{
        res.render('admin/author/create',{
            user: req.session.admin,
        });
    },
    postCreate: (req, res, next) =>{
        req.body.avatar = req.file.filename;
        author_md.createAuthor(req.body)
        .then(data =>{
            res.redirect('back');
        })
        .catch(err =>{
            res.send('lỗi' +err);
        })
    },
    detail: (req, res,next) =>{
        author_md.getAuthorById(req.params.id)
        .then(data =>{
            res.render('admin/author/detail',{
                data: data[0],
                user: req.session.admin,
            });
        })
        .catch(err =>{

        })
        
    },
    edit: (req, res, next) =>{
        author_md.getAuthorById(req.params.id)
        .then(data =>{
            res.render('admin/author/edit',{
                data: data[0],
                user: req.session.admin,
            });
        })
        .catch(err =>{
            res.send('lỗi' + err);
        })
    },
    putEdit: (req, res, next) =>{
        req.body.avatar = req.file.filename;
        author_md.editAuthor(req.body)
        .then(data =>{
            res.redirect('back');
        })
        .catch(err =>{
            res.send('lỗi' +err);
        })
    },
    delete: (req, res, next) =>{
        Promise.all([author_md.deleteAuthorByIdAuthor(req.params.id), post_md.deletePostByIdAuthor(req.params.id)])
        .then(()=>{
            res.redirect('/admin/author');
        })
        .catch(err =>{
            res.redirect('/admin/author');
        })
    }
}
