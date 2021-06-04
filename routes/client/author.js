const express = require('express');
const router = express.Router();

const loginMiddle = require('../../middlewares/loginAuthorMiddleware');

const authorController = require('../../controllers/client/author');

/* GET post of author. */
router.get('/post',loginMiddle.requireLogin, authorController.postIndex);

// GET create post page
router.get('/post/create',loginMiddle.requireLogin, authorController.getCreatePost);
// POST create post page
router.post('/post/create', authorController.createPost);

// GET edit post page
router.get('/post/:id/edit',loginMiddle.requireLogin, authorController.getEditPost);
// PUT edit post page
router.put('/post/:id/edit', authorController.editPost);

// DELETE post 
router.delete('/post/:id/delete', authorController.deletePost);

/* GET detail post of author. */
router.get('/post/:id',loginMiddle.requireLogin, authorController.getDetail);

/* GET list post by author. */
router.get('/:id', authorController.listPostByAuthor);
module.exports = router;
