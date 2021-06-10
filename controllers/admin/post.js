const post_md = require('../../models/post');

module.exports = {
    index: (req, res, next) =>{
        post_md.getAllPost()
        .then(data=>{
            res.render('admin/post/index',{
                data: data,
                user: req.session.admin,
            });
        })
        .catch(err =>{
            console.log('Err: ' + err);
        })
        //res.render('admin/post/index');
    },
    detail: (req, res,next) =>{
        post_md.getPostByIdPost(req.params.id)
        .then(data =>{
            res.render('admin/post/detail',{
                data: data[0],
                user: req.session.admin,
            });
            return;
            res.json(data);
        })
        .catch(err =>{
            res.json(err);
        })
    },
    delete: (req, res, next) =>{
        post_md.deletePostByIdPost(req.params.id)
        .then(data=>{
            res.redirect('/admin/post');
        })
        .catch(err =>{
            res.redirect('/admin/post');
        })
    }
}