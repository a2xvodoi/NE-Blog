const express = require('express');
const router = express.Router();
const loginMiddle = require('../../middlewares/loginAuthorMiddleware');

const indexController = require('../../controllers/client');

/* GET home page. */
router.get('/', indexController.index);
/* GET search page. */
router.get('/search', indexController.search);

//login
router.get('/login', loginMiddle.checkLogin, indexController.getLogin);
router.post('/login', loginMiddle.validateInputFormLogin, indexController.login);
//logout
router.get('/logout', indexController.logout);

router.get('/detailBlog/:id', indexController.detailBlog);

module.exports = router;
