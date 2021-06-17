const express = require('express');
const router = express.Router();
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

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
router.put('/:id/edit',upload.single('avatar'), authorController.putEdit);

/* DELETE  author page. */
router.delete('/:id/delete', authorController.delete);

module.exports = router;