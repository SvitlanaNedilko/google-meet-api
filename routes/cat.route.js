const express = require('express');
const router = express.Router();

const catController = require('../controllers/cat');

router.post('/', catController.createCat);

router.get('/random', catController.getRandomCat);

router.get('/', catController.getCats);

module.exports = router;
