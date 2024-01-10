const User = require("../models/UserDetails")
const Coach = require('../models/CoachDetails')
const Booking = require('../models/BookingDetails')
exports.generateUserId = async() => {
    const users = await User.find({})
    const Id = "UI-" + String(users.length).padStart(4, "0")
    return Id
}

exports.generateCoachId = async() => {
    const coaches = await Coach.find({})
    const Id = "CI-" + String(coaches.length).padStart(4, "0")
    return Id
}

exports.generateBookingId = async() => {
    const bookings = await Booking.find({})
    const Id = "BI-" + String(bookings.length).padStart(4, "0")
    return Id
}