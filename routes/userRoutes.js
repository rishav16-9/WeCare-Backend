const express = require('express');
const userController = require('../controllers/userController')
const invalidController = require('../controllers/invalidController')
const router = express.Router()

router.post('/', userController.createUser)
router.post('/login', userController.userLogin)
router.get('/:id', userController.getUser)
router.all('*', invalidController.invalid)

module.exports = router