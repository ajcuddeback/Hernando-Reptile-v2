const router = require('express').Router();
const animalRoutes = require('./animalRoutes');
const userRoutes = require('./userRoutes');

router.use('/animals', animalRoutes);
router.use('/users', userRoutes);

module.exports = router;