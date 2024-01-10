const mongoose = require('mongoose');
const {Schema} = mongoose

const BookingSchema = new Schema({
    BookingId: {
        type: String, 
        require: true
    },
    UserId: {
        type: String,
        require: true
    },
    CoachId: {
        type: String,
        require: true
    },
    AppointmentDate: {
        type: Date,
        require: true
    },
    Slot: {
        type: String,
        require: true
    }
})

const Booking = mongoose.model('booking', BookingSchema)
module.exports = Booking