
const indexRoute = require('./client');
const authorRoute = require('./client/author');
const categoryRoute = require('./client/category');
const indexAdRoute = require('./admin/index');
const postAdRoute = require('./admin/post');
const authorAdRoute = require('./admin/author');

function router(app){
    //Pages Client
    app.use('/', indexRoute);
    app.use('/author', authorRoute);
    app.use('/category', categoryRoute);

    //Pages Admin
    app.use('/admin', indexAdRoute);
    app.use('/admin/post', postAdRoute);
    app.use('/admin/author', authorAdRoute);
}

module.exports = router;
