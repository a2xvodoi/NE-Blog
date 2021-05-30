const express = require('express');
const router = express.Router();

const indexController = require('../../controllers/client');

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
