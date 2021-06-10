const express = require('express');
const router = express.Router();
const postController = require('../../controllers/admin/post');
const login_Midd = require('../../middlewares/loginAdminMiddleware');
router.use(login_Midd.requireLogin);

/* GET index post page. */
router.get('/', postController.index);

/* GET detail post page. */
router.get('/:id', postController.detail);

/* DELETE  post page. */
router.delete('/:id/delete', postController.delete);

module.exports = router;