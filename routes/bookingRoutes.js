const express = require('express');
const bookingController = require('../controllers/bookingController');
const invalidController = require('../controllers/invalidController')
const router = express.Router()

router.put('/:bookingId', bookingController.updateBooking)
router.delete('/:bookingId', bookingController.deleteBooking)
router.all('*', invalidController.invalid)
module.exports = router

