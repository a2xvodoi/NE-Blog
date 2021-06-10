const express = require('express');
const router = express.Router();
const authorController = require('../../controllers/admin/author');
const login_Midd = require('../../middlewares/loginAdminMiddleware');
router.use(login_Midd.requireLogin);

/* GET index author page. */
router.get('/', authorController.index);

/* GET detail author page. */
router.get('/:id', authorController.detail);

/* GET edit author page. */
router.get('/:id/edit', authorController.edit);
/* PUT edit author page. */
router.put('/:id/edit', authorController.putEdit);

/* DELETE  author page. */
router.delete('/:id/delete', authorController.delete);

module.exports = router;