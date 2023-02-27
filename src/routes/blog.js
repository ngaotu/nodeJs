const express = require('express');
const router = express.Router();
const blogController = require('../app/controllers/BlogController');

router.use('/:detail', blogController.show);
router.use('/', blogController.index);

module.exports = router;
