module.exports ={
    index : (req, res, next) =>{
        res.render('index', { title: 'Blog' });
    },
    user: (req, res, next) =>{
        res.send('Page of user');
    }
}