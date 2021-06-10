const user_md = require('../../models/user');

module.exports = {
    indexAd: (req, res, next) =>{
        res.render('admin/index',{
            user: req.session.admin,
        });
    },
    getLogin: (req, res, next) =>{
        res.render('admin/login',{
            data: false,
            values: false,
        });
    },
    login: (req, res, next) =>{
        user_md.getUserByUserName(req.body.userName)
        .then(data =>{
            var err = [];
            if (data.length > 0) {
                console.log(data[0].pass + ',' + req.body.pass );
                if (data[0].pass === req.body.pass) {
                    req.session.admin = data[0];
                    res.redirect('/admin');
                    return;
                } else {
                    err.push('Mật khẩu không chính xác');
                }
            }else{
                err.push('Tên tài khoản không chính xác');
            }
            
            res.render('admin/login',{
                data: {
                    err: true,
                    errMess: err,
                },
                values: {
                    name: req.body.userName,
                    pass: req.body.pass,
                }
            })
        })
        .catch(err =>{
            console.log(err);
        })
    },
    logout: (req, res, next) =>{
        req.session.admin = false;
        res.redirect('/admin/login');
    }
}