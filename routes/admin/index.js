const express = require('express');
const router = express.Router();
const indexController = require('../../controllers/admin/index');
const login_Midd = require('../../middlewares/loginAdminMiddleware');

/* GET index page. */
router.get('/',login_Midd.requireLogin, indexController.indexAd);

/* GET login page. */
router.get('/login',login_Midd.checkLogin, indexController.getLogin);
/* POST login page. */
router.post('/login', login_Midd.validateInputFormLogin, indexController.login);

//Logout
router.get('/logout', indexController.logout);

module.exports = router;