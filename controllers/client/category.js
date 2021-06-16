const post_md = require('../../models/post');
const category_md = require('../../models/category');

module.exports ={
    
    listPostByCategory: (req, res, next) =>{
        post_md.getPostByIdCategory(req.params.id)
        .then(data=>{
            var page = parseInt(req.query.page ? req.query.page : 1);
            var perPage = 6;
            var totalPage = Math.ceil(data.length/perPage);
            if (page >0) {
                page = totalPage <= page ? totalPage : page;
                req.query.page = totalPage;
            }else{
                page =1;
                req.query.page=1;
            }

            res.render('client/categoryPost',{
                title: data[0].categoryName,
                data: data.slice((page-1)*perPage,perPage*page),
                currentPage: page,
                totalPage: totalPage,
                category: {
                    name: data[0].categoryName,
                    intro: data[0].categoryIntro,
                    id: data[0].idCategory,
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