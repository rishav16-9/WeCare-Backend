const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingSchema = new Schema({
  bookingId: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  coachId: {
    type: String,
    require: true,
  },
  appointmentDate: {
    type: Date,
    require: true,
  },
  slot: {
    type: String,
    require: true,
  },
});

const Booking = mongoose.model("booking", BookingSchema);
module.exports = Booking;
