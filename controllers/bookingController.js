const Booking = require("../models/BookingDetails");
const User = require("../models/UserDetails");
const Coach = require("../models/CoachDetails");
const validator = require("../utilities/validate");
const helper = require("../utilities/helper");

exports.createBooking = async (req, res) => {
  try {
    const { userId, coachId } = req.params;
    let user = await User.findOne({ UserId: req.params.userId });
    if (!user) {
      res.status(400).send("User Id does not exist");
    }
    const coach = await Coach.findOne({ coachId: req.params.coachId });
    if (!coach) {
      res.status(400).send("Coach Id does not exist");
    }
    const slot = await Booking.findOne({ slot: req.body.slot });
    if (slot) {
      res.status(400).send("Slot Alerady Exist");
    }
    if (!validator.validateUpcomingWeek(req.body.appointmentDate)) {
      return res
        .status(400)
        .json({ message: "Date should be any upcoming 7 days" });
    }
    const Id = await helper.generateBookingId();
    if (
      user &&
      coach &&
      !slot &&
      validator.validateUpcomingWeek(req.body.appointmentDate)
    ) {
      const appointment = await Booking.create({
        BookingId: Id,
        UserId: req.params.userId,
        CoachId: req.params.coachId,
        AppointmentDate: req.body.AppointmentDate,
        Slot: req.body.Slot,
      });
    } else {
    }
    res.status(200).send("true");
  } catch (error) {
    console.log(error);
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findOne({ BookingId: req.params.bookingId });
    console.log(booking);
    if (!booking) {
      res.status(400).json({
        message: "Booking Id does not exist",
      });
    } else {
      const booking = await Booking.findOneAndUpdate(
        { bookingId: req.params.bookingId },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200).json({
        message: true,
      });
    }
  } catch (error) {
    res.status(400).json({ message: err });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findOneAndDelete({
      bookingId: req.params.bookingId,
    });
    if (booking) {
      res.status(200).json({
        message: true,
      });
    } else {
      res.status(400).json({
        message: "Booking id does not exist",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

exports.getBookingByCoachId = async (req, res) => {
  try {
    const { coachId } = req.params;
    const coach = await Booking.find({ coachId: req.params.coachId });
    if (coach && coach.length > 0) {
      res.status(200).send(coach);
    } else {
      res.status(400).json({
        message: "Could not find any bookings",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

exports.getBookingByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Booking.find({ userId: req.params.userId });
    if (user && user.length > 0) {
      res.status(200).send(user);
    } else {
      res.status(400).json({
        message: "Could not find any bookings",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};
