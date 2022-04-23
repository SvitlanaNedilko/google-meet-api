const userRoutes = require('./user.route');
const catRoutes = require('./cat.route');

const express = require('express');
const router = express.Router();

router.use('/users', userRoutes);
router.use('/cats', catRoutes);

module.exports = router;
