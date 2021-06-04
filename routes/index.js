
const indexRoute = require('./client');
const authorRoute = require('./client/author');
const categoryRoute = require('./client/category');

function router(app){
    app.use('/', indexRoute);
    app.use('/author', authorRoute);
    app.use('/category', categoryRoute);
}

module.exports = router;
