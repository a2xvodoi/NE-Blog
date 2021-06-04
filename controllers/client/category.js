const post_md = require('../../models/post');
const category_md = require('../../models/category');

module.exports ={
    
    listPostByCategory: (req, res, next) =>{
        post_md.getPostByIdCategory(req.params.id)
        .then(data=>{
            res.render('client/categoryPost',{
                title: data[0].categoryName,
                data: data,
                category: {
                    name: data[0].categoryName,
                    intro: data[0].categoryIntro,
                },
                author: req.session.author ?? 0 ,
            });
        })
        .catch(err =>{
            res.render('client/categoryPost',{
                title: 'Lỗi',
                data: {
                    statusErr: true,
                    err: 'Không tìm thấy bài viết nào!!!',
                },
                author: req.session.author ?? 0 ,
            });
        })
    },
    
}