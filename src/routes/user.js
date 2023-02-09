const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/create', userController.create);
// router.get('/:id/edit', userController.edit);

module.exports = router;