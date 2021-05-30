const express = require('express');
const router = express.Router();

const indexController = require('../../controllers/client');

/* GET users listing. */
router.get('/', indexController.user);

module.exports = router;
