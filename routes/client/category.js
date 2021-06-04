const express = require('express');
const router = express.Router();

const categoryController = require('../../controllers/client/category');

/* GET list post by category. */
router.get('/:id', categoryController.listPostByCategory);

module.exports = router;
