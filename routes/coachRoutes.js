const express = require('express');
const router = express.Router()
const coachController = require('../controllers/coachController');
const invalidController = require('../controllers/invalidController')


router.post('/', coachController.createCoach)
router.post('/login', coachController.coachLogin)
router.get('/all', coachController.getAllCoach)
router.get('/:coachId', coachController.getCoach)
router.all('*', invalidController.invalid)

module.exports = router 