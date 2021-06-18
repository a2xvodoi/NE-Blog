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

const loginMiddle = require('../../middlewares/loginAuthorMiddleware');
const authorController = require('../../controllers/client/author');

/* GET info of author. */
router.get('/info',loginMiddle.requireLogin, authorController.postInfo);
router.put('/info',upload.single('avatar'), authorController.putInfo);
router.put('/info/change-pass',authorController.changePass);

/* GET post of author. */
router.get('/post',loginMiddle.requireLogin, authorController.postIndex);

// GET create post page
router.get('/post/create',loginMiddle.requireLogin, authorController.getCreatePost);
// POST create post page
router.post('/post/create',upload.single('bg_image'), authorController.createPost);

// GET edit post page
router.get('/post/:id/edit',loginMiddle.requireLogin, authorController.getEditPost);
// PUT edit post page
router.put('/post/:id/edit',upload.single('bg_image'), authorController.editPost);

// DELETE post 
router.delete('/post/:id/delete', authorController.deletePost);

/* GET detail post of author. */
router.get('/post/:id',loginMiddle.requireLogin, authorController.getDetail);

/* GET list post by author. */
router.get('/:id', authorController.listPostByAuthor);
module.exports = router;
