
const indexRoute = require('./client');
const userRoute = require('./client/users');

function router(app){
    app.use('/', indexRoute);
    app.use('/users', userRoute);
}

module.exports = router;
