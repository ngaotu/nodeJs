const express = require('express');
const router = express.Router();
const shoesController = require('../app/controllers/ShoesController');

router.get('/:slug', shoesController.show);
router.get('/', shoesController.index);

module.exports = router;
